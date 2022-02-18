const hamburgerBtn = document.querySelector(".hamburger-container")
const navBar = document.querySelector(".nav")
const cartBtn = document.querySelector(".cart")
let active = false
cartBtn.addEventListener("click", ()=>{
    window.location.href="./Varukorg.html"
})
hamburgerBtn.addEventListener("click", ()=>{
    if(!active){
        active = true
        navBar.classList.add("active")
        hamburgerBtn.classList.add("activeBtn")
    }
    else{
        active = false
        navBar.classList.remove("active")
        hamburgerBtn.classList.remove("activeBtn")
    }
})
