
const orderWrapper = document.querySelector(".endproduct");
const orderForm = document.querySelector (".orderFormular");
const orderContainer = document.querySelector (".orderContainer");
let total = document.querySelector(".total");

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

const localCart = localStorage.getItem("cart");

if(localCart){
 let cartProduct= JSON.parse(localCart)
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
    totalPrice = totalPrice + parseInt(product.price)
   
  });
  total.innerHTML= totalPrice
  return returnArray;
   };
   const uniqueArray = getUniqueProds(cartProduct)
   sort(uniqueArray)
   orderContainer.innerHTML= uniqueArray.map(oneOrder).join("")
}

const currentOrderForm = document.querySelector("#orderForm");

const orderName = document.querySelector("#orderName");
const orderAdress = document.querySelector("#orderAdress");
const orderZipcode = document.querySelector("#orderZipcode");
const orderCity = document.querySelector("#orderCity");
const orderEmail = document.querySelector("#orderEmail");
const orderPhone = document.querySelector("#orderPhone");
const orderComments = document.querySelector("#orderComments");

let currentUserObj = localStorage.getItem("loggedInUser");

if(currentUserObj) {
  let users = JSON.parse(localStorage.users);
  currentUserObj = JSON.parse(currentUserObj);
  
  const currentUser = users.find((item) => {
    return currentUserObj.email === item.email
  });
  orderName.value = currentUser.name;
  orderAdress.value = currentUser.adress;
  orderZipcode.value = currentUser.zipcode;
  orderCity.value = currentUser.city;
  orderEmail.value = currentUser.email;
  orderPhone.value = currentUser.phone;
}

const orderArr = () => {
  const orders = (() => {
    const orderValue = localStorage.getItem('orders');
    return orderValue === null
      ? []
      : JSON.parse(orderValue);
  })();

  orders.push({
    // "name": orderName.value, 
    // "adress": orderAdress.value,
    // "zipcode": orderZipcode.value,
    // "city": orderCity.value,
    // "email": orderEmail.value,
    // "phone": orderPhone.value,
    // "comments": orderComments.value

    "Namn": orderName.value, 
    "Adress": orderAdress.value,
    "Postnummer": orderZipcode.value,
    "Stad": orderCity.value,
    "Epost": orderEmail.value,
    "Telefon": orderPhone.value,
    "Kommentar": orderComments.value
  });

  localStorage.setItem('orders', JSON.stringify(orders));
}

const viewkvitto = document.querySelector("#kvitto");

let kvitto = () => `
<div class="kvittocontainer">
  <div class="kvittohead">
    <h2 class="kvitto-headings">KVITTO</h2>
    <h3 class="kvitto-headings">Tack för din beställning</h3>
  </div>
  <ul id="kvittoProduktLista"></ul>
  <div id="kvittototal" class="total"></div>
  <div id="kvittopersinfo" class="kvittopersinfo">
    <h3 class="kvitto-headings">Leveransinformation</h3>
  </div>
</div>
`;

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


let kvittoFunc = () => {
  let persinfo = localStorage.getItem("orders");
  let cartProduct = JSON.parse(localCart)
  viewkvitto.style.display = "hidden";
  viewkvitto.innerHTML = kvitto();
  const kvittoProduktLista = document.querySelector('#kvittoProduktLista');
  const kvittopersinfo = document.querySelector("#kvittopersinfo")
  const kvittototal = document.querySelector("#kvittototal");

  let totalPrice = 0

  cartProduct = getUniqueProds(cartProduct)

  cartProduct.forEach((vald)=>{
    const liProd = document.createElement("li");
    const liDiv = document.createElement("div");
    liDiv.classList.add("line")
    liProd.innerText = vald.name + " " + vald.antal + "st " + vald.price + ":-"
    liProd.appendChild(liDiv)
    kvittoProduktLista.appendChild(liProd)
  
    totalPrice = totalPrice + vald.price
  })

  kvittototal.innerHTML = "Total kostnad: " + totalPrice + ":-";

  let persInfo = JSON.parse(persinfo);

  persInfo.forEach((order) => {
    // const godbaytext = document.createElement("p");
    // godbaytext.innerText = 
    //   "Namn: " + order.name + 
    //   "\nLeveransadress: " + order.adress +
    //   "\nPostnummer: " + order.zipcode +
    //   "\nStad: " + order.city +
    //   "\nEpost: " + order.email +
    //   "\nTelefon: " + order.phone +
    //   "\nKommentar: " + order.comments;
    // kvittopersinfo.appendChild(godbaytext);
    // godbaytext.style.textAlign = "center";
    for (let property in order) {
      const godbaytext = document.createElement("p");
      godbaytext.innerHTML = `${property}: ${order[property]}`
      kvittopersinfo.appendChild(godbaytext);
      // godbaytext.style.textAlign = "center";
    }
  })
}

currentOrderForm.addEventListener("submit", (e) => {
  localStorage.removeItem("orders");
  e.preventDefault();
  orderArr();
  kvittoFunc();
});