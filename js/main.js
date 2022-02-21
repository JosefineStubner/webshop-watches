const hamburgerBtn = document.querySelector(".hamburger-container");
const navBar = document.querySelector(".nav");
const cartBtn = document.querySelector(".cart");
let active = false;

cartBtn.addEventListener("click", () => {
  window.location.href = "./Varukorg.html";
});
hamburgerBtn.addEventListener("click", () => {
  if (!active) {
    active = true;
    navBar.classList.add("active");
    hamburgerBtn.classList.add("activeBtn");
  } else {
    active = false;
    navBar.classList.remove("active");
    hamburgerBtn.classList.remove("activeBtn");
  }
});

//Funktion över hela sidan
//uppdaterar shopping cart count baserat på hur många produkter som finns i local storage (shopping cart).
const updateCartCount = () => {
    let shoppingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const countDisplay = document.querySelector("#quantity");
    countDisplay.innerHTML = shoppingCart.length;
  };
  
updateCartCount();

//Gemensam funktion på hela sidan.
const addProductToCart = (productId) => {
  console.log(productId);
  fetchProductData().then((data) => {

    //Hämtar all data från storage, letar upp produkter med samma ID (välj den första/enda med samma ID).
    const productToBuy = data.products.filter(product => product.id == productId)[0];

    //Delad funktion över hela sidan
    let shoppingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    shoppingCart.push(productToBuy);

    localStorage.setItem("cart", JSON.stringify(shoppingCart));
    console.log(shoppingCart);

    updateCartCount();
  });
}