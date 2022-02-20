
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

    // const productImgDiv = document.createElement("div");
    // productImgDiv.classList.add("productImgDiv");

    const productImage = document.createElement("img");
    productImage.src = product.image;

    //href på image fungerar inte, löser med a-tagg senare.
    productImage.href = `Produktsida.html?name=${product.name}`;

    //köpknapp
    const buyBtn = document.createElement("button");

    buyBtn.innerText = "Köp";

    //Append elements to productCard
    productCardList.appendChild(productParagraph);
    productCardList.appendChild(productImage);
    productCardList.appendChild(buyBtn);

    //append productCard to section
    productList.appendChild(productCardList);
  });
});

// Funktion för att lägga till produkten i varukorgen


// Textfält där användaren kan “söka” efter en produkt, alltså ett filter där innehållet i sökfältet skall matchas mot produktens namn och beskrivning (VG)

//Att göra: Måste man ha en div runt bilden för att styla? Hur isf?
//Köpknapp.
//Filter (input-fält etc)
//Styling D: