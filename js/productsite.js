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
//hämtar data från JSON
const fetchJson = async () => {
  const response = await fetch("./js/products.json");
  const data = await response.json();
  return data;
};
//skapar variabel för qs där jag hämtar name.
const queryString = new URLSearchParams(location.search);
let qsName = queryString.get("name");
//alla JSON produkter
fetchJson().then((data) => {
  const products = data.products;

  //funktion hämtar variablen products, för varje prod - kolla om name är samma som qsName. Om så skriv ut i productWrapper.
  function selectedProd(item) {
    console.log(item, qsName);
    item.forEach((prod) => {
      if (prod.name.toLowerCase() == qsName.toLowerCase()) {
        console.log("hej");
        productWrapper.innerHTML = productComponent(prod);
      }
    });
    let countdisplay = document.querySelector("#quantity")
    let count = 0
    let shoppingCart = [];
    const buyBtn = document.querySelectorAll(".buyBtn");
    buyBtn.forEach((e) => {
      e.addEventListener("click", (e) => {
        let dataAttribute = e.target.getAttribute("data-id");
        products.forEach((e) => {
          if (dataAttribute == e.id) {
            count++
            countdisplay.innerHTML = count;
            shoppingCart.push(e);
            localStorage.setItem("cart", JSON.stringify(shoppingCart));
            console.log(shoppingCart);
          }
        });
      });
    });
  }
  selectedProd(products);
  

});


