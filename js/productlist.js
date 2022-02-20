
const productList = document.querySelector(".productlist")


//hämtar data från JSON
const fetchProductData = async () => {
  const response = await fetch("./js/products.json");
  return await response.json();
};

//skapar variabel för querystring där jag hämtar category.
const queryStringCategory = new URLSearchParams(location.search);

//toLowerCase för att komma runt eventuella stavfel.
let qsCategory = queryStringCategory.get("category").toLowerCase();
console.log(qsCategory);

//hämta alla json-produkter / filtrera bort produkter utifrån category
fetchProductData().then((data) => {
  const searchText = "3";
  const products = data.products.filter(product => product.category.toLowerCase() == qsCategory && (product.name.toLowerCase().includes(searchText) || product.description.toLowerCase().includes(searchText)));

  // för varje produkt skapa ett produktkort
  // .forEach
  products.forEach(function (product) {

    // Varje produkt skall ha: Namn / Pris / Bild
    //Skapa html-element.
    const productCardList = document.createElement("div");
    productCardList.classList.add("productCard");

    const productParagraph = document.createElement("p");
    productParagraph.innerText = product.name;

    //prata med Emma om id vs name
    const imageWrapper = document.createElement("a") ;
    imageWrapper.href = `Produktsida.html?name=${product.name}`;


    const productImage = document.createElement("img");
    productImage.src = product.image;

    //köpknapp
    const buyBtn = document.createElement("button");

    // Funktion för att lägga till produkten i varukorgen via köpknappen.
    buyBtn.addEventListener("click", function () {addProductToCart (product.id)});
    

    buyBtn.innerText = "Köp";

    //Append elements to productCardList
    productCardList.appendChild(productParagraph);
    imageWrapper.appendChild(productImage);
    productCardList.appendChild(imageWrapper);
    productCardList.appendChild(buyBtn);

    //append productCard to section
    productList.appendChild(productCardList);
  });
});

//Kan man ha hela nedan som gemensam funktion på hela sidan?
const addProductToCart = (productId) => {
  console.log(productId);
  fetchProductData().then((data) => {

    //Hämtar all data från storage, letar upp produkter med samma ID (välj den första/enda med samma ID).
    const productToBuy = data.products.filter(product => product.id == productId)[0];

    //Bör vara en delad funktion över hela sidan
    let shoppingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    shoppingCart.push(productToBuy);

    localStorage.setItem("cart", JSON.stringify(shoppingCart));
    console.log(shoppingCart);

    updateCartCount();
  });
// });
}

//preventdefault?

// Textfält där användaren kan “söka” efter en produkt, alltså ett filter där innehållet i sökfältet skall matchas mot produktens namn och beskrivning (VG)

//1. Skapa upp ett input-fält (text) i html.
//2. Skapa knapp för att söka.
//3. Skapa eventlistener för när man trcker på sök-knappen.
//4. hämta texten från sökfältet. (searchText)
//5. 

// const filteredProducts = data.products.filter(product => product.name.toLowerCase().includes(searchText) || product.description.toLowerCase().includes(searchText));


//Att göra: Måste man ha en div runt bilden för att styla? Hur isf? (OBS ska ändå göra a-tagg, styla den isf?) ((öva på css, glömt allt))

//Filter (input-fält etc)

//Styling D: