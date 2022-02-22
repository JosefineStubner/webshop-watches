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

//if/else med nästlad if-sats.
const checkUserInfo = () => {
  //går igenom alla användare:
  users.forEach((user) => {
  //för den användare som matchar angiven mail:
    if (user.email === loginEmail.value) {
  //jämför endast lösenordet för denna användare:
      if (user.password === loginPassword.value) {
  //ger denna alert om rätt:
        alert("login successful");
        loggedInUser();
      } else {
  //ger denna alert om fel:
  //OBS för närvarande kommer ingen alert, ska felsöka.
        alert("login failed");
      }
    }
  });
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkUserInfo();

  location.reload();

});
