
const productList = document.querySelector(".productlist")


//hämtar data från JSON
const fetchJson = async () => {
  const response = await fetch("./js/products.json");
  const data = await response.json();
  return data;
};

//skapar variabel för querystring där jag hämtar category.
const queryString = new URLSearchParams(location.search);

//toLowerCase för att komma runt eventuella stavfel.
let qsCategory = queryString.get("category").toLowerCase();
console.log(qsCategory);

//hämta alla json-produkter / filtrera bort produkter utifrån category
fetchJson().then((data) => {
  const products = data.products.filter(product => product.category.toLowerCase() == qsCategory);

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
    buyBtn.addEventListener("click", function () {buyListProduct (product.id)});
    

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

const buyListProduct = (productId) => {
  console.log(productId);
  fetchJson().then((data) => {

    //Hämtar all data från storage, letar upp produkter med samma ID (välj den första/enda med samma ID).
    const productToBuy = data.products.filter(product => product.id == productId)[0];

    //Bör vara en delad funktion över hela sidan
    let shoppingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    shoppingCart.push(productToBuy);

    localStorage.setItem("cart", JSON.stringify(shoppingCart));
    console.log(shoppingCart);
});
}

//preventdefault?

// Textfält där användaren kan “söka” efter en produkt, alltså ett filter där innehållet i sökfältet skall matchas mot produktens namn och beskrivning (VG)

//Att göra: Måste man ha en div runt bilden för att styla? Hur isf? (OBS ska ändå göra a-tagg, styla den isf?) ((öva på css, glömt allt))

//Filter (input-fält etc)

//Styling D: