const shoppingWrapper = document.querySelector(".schoppingcart-wrapper");
let total = document.querySelector(".total");

function clearAllElements(parentElem){
  while(parentElem.firstChild){
      parentElem.removeChild(parentElem.lastChild);
  }
};

function renderCards(list){
  list.forEach((card, i) => {
      // console.log(card);
      const elemCard = document.createElement("div")
      elemCard.innerHTML =shoppingComponent(card)

      shoppingWrapper.appendChild(elemCard);
  });
}

const shoppingComponent = (event)=> `
<div class="card">
          <img src="" alt="${event.category}">
          <div class="card-wrapper">
            <h3 class="pruductname">${event.name}</h3>
            <div class="bottom-line-wrapper">
              <label for="amount">Antal:</label>
              <h4>${event.antal}St</h4>
              <button class="deleteBtn button" data-id="${event.id}">Ta bort</button>
              <h4 class="price">${event.price} Sek</h4>
            </div>
          </div>
        </div>
`

const localCart = localStorage.getItem("cart")
if(localCart){
 let cartProduct= JSON.parse(localCart)

 
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
 
 shoppingWrapper.innerHTML= uniqueArray.map(shoppingComponent).join("")
 
 
 
//  let NewShoppingCart = [...cartProduct]
//deleteknapp
 let card = document.querySelector(".card")
 
 const deletproduct = document.querySelectorAll(".deleteBtn");
 
 
 
 deletproduct.forEach(e=>{
   e.addEventListener("click", ()=>{
     uniqueArray.splice(e, 1);
     localStorage.setItem("cart", JSON.stringify(uniqueArray));
     shoppingWrapper.removeChild(card);
     location.reload()
    })
  })
}


