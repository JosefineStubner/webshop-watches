
const orderWrapper = document.querySelector(".endproduct");
const orderForm = document.querySelector (".orderFormular")
const orderContainer = document.querySelector (".orderContainer")
let total = document.querySelector(".total");


//ska skappas för varje köpcklick.
let oneOrder = (item) => `
<div class="oneproduct">
  <img src="${item.image}" alt="" />
  <div class="orderCardContainer">
  <h2>${item.name}</h2>
  <p> Antal ${item.antal} st</p>
  <p>${item.price} kr</p>
  </div>
  </div>
  <div class="line"></div>
`;


const localCart = localStorage.getItem("cart")
if(localCart){
 let cartProduct= JSON.parse(localCart)
console.log(cartProduct)
 orderContainer.innerHTML = cartProduct.map(oneOrder).join("")

 function getUniqueProds(prodList){
  const returnArray = []
  let totalPrice = 0
  prodList.forEach(product =>{
    const alreadyExists = returnArray.find(retProd =>{
      return retProd.id === product.id;
    });
    if (!alreadyExists){
      returnArray.push({
        ...product,
        antal:1
      });
    }else{
      alreadyExists.antal += 1;
      alreadyExists.price = parseInt(product.price) * alreadyExists.antal;
    }
    totalPrice = totalPrice + product.price
   
  });
  total.innerHTML= totalPrice
  return returnArray;
   };
   const uniqueArray = getUniqueProds(cartProduct)
   sort(uniqueArray)
   orderContainer.innerHTML= uniqueArray.map(oneOrder).join("")
   console.log(uniqueArray)


}