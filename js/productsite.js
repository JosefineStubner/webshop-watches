const productWrapper = document.querySelector(".productside")

let productComponent = (item)=>`


<img class ="productimg" src="${item.image}" alt="" />
<div class="productinfo">
  <h3 class="productheading" id="productname">${item.name}</h3>
  <p class="producttext" id="productpara">
  </p>
  <button class="">Köp</button>
</div>

`

const fetchJson = async ()=>{
const response = await fetch("./products.json")
const data = await response.json()
return data
}
fetchJson()
.then(data => {
    const products = data.products;
    // productWrapper.innerHTML= products.map(productComponent).join("")
    productWrapper.innerHTML= productComponent(products[0])

})

// productWrapper.innerHTML = 