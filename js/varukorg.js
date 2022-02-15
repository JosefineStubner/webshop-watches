const shoppingWrapper = document.querySelector(".schoppingcart-wrapper");

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
              <label for="amount">Antal</label>
              <input type="number" min="0" name="" id="amount">
              <button class="deleteBtn button" data-id="${event.id}">Ta bort</button>
              <h4 class="price">${event.price} Sek</h4>
            </div>
          </div>
        </div>
`

const localCart = localStorage.getItem("cart")
if(localCart){
 let cartProduct= JSON.parse(localCart)

let NewShoppingCart = [...cartProduct]




 shoppingWrapper.innerHTML= cartProduct.map(shoppingComponent).join("")
 



}
