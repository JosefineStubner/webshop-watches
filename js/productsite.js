let test = [
  {
    name: "Emma",
    plats: "här",
    category: 1,
  },
  {
    name: "Albin",
    plats: "Där",
    category: 2,
  },
  {
    name: "Patrik",
    plats: "där",
    category: 3,
  },
];

const queryString = new URLSearchParams(location.search);
let qsName = queryString.get("category");
const productWrapper = document.querySelector(".productside");
let productComponent = (item) => `
<div class="productCard">
<div class="productImg">
<img src="${item.image}" alt="" />
</div>
<div class="productinfo">
  <h3 class="productheading" id="productname">${item.name}</h3>
  <p class="producttext" id="productpara">
  lorem ipsum dolor amet lorem ipsum dolor amet 
  </p>
  <button class="buyBtn" data-id="${item.id}">Köp</button>
</div>
</div>
`;

const fetchJson = async () => {
  const response = await fetch("./js/products.json");
  const data = await response.json();
  return data;
};
fetchJson().then((data) => {
  const products = data.products;
  // productWrapper.innerHTML= products.map(productComponent).join("")
  // productWrapper.innerHTML= productComponent(products[0])

  function selectedProd(item) {
      console.log(item,qsName)
    item.forEach((prod) => {
      if (prod.category.toLowerCase() == qsName.toLowerCase()) {
        console.log("hej");
        productWrapper.innerHTML = productComponent(prod);
      }
    });

    // productWrapper.innerHTML = prodName.map(productComponent).join("");
    let shoppingCart = [];
    const buyBtn = document.querySelectorAll(".buyBtn");
    buyBtn.forEach((e) => {
      e.addEventListener("click", (e) => {
        let dataAttribute = e.target.getAttribute("data-id");
        products.forEach((e) => {
          if (dataAttribute == e.id) {
            shoppingCart.push(e);
            localStorage.setItem("cart", JSON.stringify(shoppingCart));
             console.log(shoppingCart)
          }
        });
      });
    });
  }
  selectedProd(products);
});

// productWrapper.innerHTML =
