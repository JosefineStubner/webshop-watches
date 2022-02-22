
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
  <p>${item.antal}St</p>
  <h3>${item.price}Kr</h3>
  </div>
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
  })

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
    "name": orderName.value, 
    "adress": orderAdress.value,
    "zipcode": orderZipcode.value,
    "city": orderCity.value,
    "email": orderEmail.value,
    "phone": orderPhone.value,
    "comments": orderComments.value
  });

  localStorage.setItem('orders', JSON.stringify(orders));
}

currentOrderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  orderArr();

})