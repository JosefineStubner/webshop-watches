const shoppingWrapper = document.querySelector(".schoppingcart-wrapper");

const shoppingComponent = (event)=> `
<div class="card">
          <img src="" alt="${event.category}">
          <div class="card-wrapper">
            <h3 class="pruductname">${event.name}</h3>
            <div class="bottom-line-wrapper">
              <label for="amount">Antal</label>
              <input type="number" min="0" name="" id="amount">
              <button class="deleteBtn button">Ta bort</button>
              <h4 class="price"> Sek</h4>
            </div>
          </div>
        </div>
`
const fetchJson = async ()=>{
    const response = await fetch("./products.json");
    const data = await response.json();
    return data
}
fetchJson()
.then(data => console.log(data)

)