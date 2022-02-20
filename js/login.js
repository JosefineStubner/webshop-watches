const loginForm = document.querySelector("#loginForm");

const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

const loginMenuLink = document.querySelector("#loginMenuLink");
const loginMenuList = document.querySelector("#loginMenuList");

const loggedInUser = () => {
  localStorage.removeItem("loggedInUser")
  localStorage.setItem("loggedInUser", JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value,
    })
  );

};

let users = JSON.parse(localStorage.users);

// if/else med nästlad if-sats-
const checkUserInfo = () => {
  // Går igenom alla användare:
  users.forEach((user) => {
  // För den användare som matchar angiven mail:
    if (user.email === loginEmail.value) {
  // Jämför endast lösenordet för denna användare:
      if (user.password === loginPassword.value) {
  // Ger denna lert om rätt:
        alert("login successful");
        loggedInUser();
      } else {
  // Ger denna alert om fel:
        alert("login failed");
      }
    }
  });
};

let loggedInUserObj = localStorage.getItem("loggedInUser");

// Fungerande funktion men endast för login email och inte user namn etc
if(loggedInUserObj) {
  loggedInUserObj = JSON.parse(loggedInUserObj);
  loginMenuLink.classList.add("hidden-login");
  let li = document.createElement("li");
  li.innerText = loggedInUserObj.email;
  loginMenuList.appendChild(li);
}


loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkUserInfo();

  location.reload();

});
