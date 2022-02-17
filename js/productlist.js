
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
