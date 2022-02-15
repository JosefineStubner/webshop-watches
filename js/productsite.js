let test = [
  {
    name:"Emma",
    plats:"här",
    category:1
  },
  {
    name:"Albin",
    plats:"Där",
    category:2
  },
{
  name:"Patrik",
  plats:"där",
  category:3
},
]

const productWrapper = document.querySelector(".productside")
const queryString = new URLSearchParams(location.search)
let qsCategory = queryString.get("category")

let productComponent = (item)=>`
<div class="productCard">
<div class="productImg">
<img src="${item.image}" alt="" />
</div>
<div class="productinfo">
  <h3 class="productheading" id="productname">${item.name}</h3>
  <p class="producttext" id="productpara">
  lorem ipsum dolor amet lorem ipsum dolor amet 
  </p>
  <button class="buyBtn">Köp</button>
</div>
</div>
`

const fetchJson = async ()=>{
const response = await fetch("./js/products.json")
const data = await response.json()
return data
}
fetchJson()
.then(data => {
    const products = data.products;
    // productWrapper.innerHTML= products.map(productComponent).join("")
    // productWrapper.innerHTML= productComponent(products[0])
    console.log(products)

    console.log(qsCategory);
    
    let prodName = []
    function selectedProd(item) {
      item.forEach (prod =>{
        console.log(prod.category);
        if(prod.category == qsCategory){
          // const paragraf = document.createElement("p")
          // paragraf.innerText= prod
          prodName.push(prod)
          console.log("test")
        }
      })
      productWrapper.innerHTML= prodName.map(productComponent).join("")
      let shoppingCart = []
      const buyBtn = document.querySelectorAll(".buyBtn")
      buyBtn.forEach(e=>{
         e.addEventListener("click", (e)=>{
             shoppingCart.push(products[e])
             console.log(shoppingCart)
         })
      })
  }
  selectedProd(products)
  })


// productWrapper.innerHTML = 

