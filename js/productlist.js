
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
    const productCard = document.createElement("div");
    productCard.classList.add("productCard");

    const productParagraph = document.createElement("p");
    productParagraph.innerText = product.name;

    const productImage = document.createElement("img");
    productImage.src = product.image;

    //href på image fungerar inte, löser med a-tagg senare.
    productImage.href = `Produktsida.html?name=${product.name}`;

    //köpknapp
    const buyBtn = document.createElement("button");

    buyBtn.innerText = "Köp";

    //Append elements to productCard
    productCard.appendChild(productParagraph);
    productCard.appendChild(productImage);
    productCard.appendChild(buyBtn);

    //append productCard to section
    productList.appendChild(productCard);
  });
});

// Funktion för att lägga till produkten i varukorgen


// Textfält där användaren kan “söka” efter en produkt, alltså ett filter där innehållet i sökfältet skall matchas mot produktens namn och beskrivning (VG)
