const loginForm = document.querySelector("#loginForm");

const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

let users = JSON.parse(localStorage.users);

const checkUsers = () => {
  users.map((user) => {
    if (user.email === loginEmail.value && user.password === loginPassword.value) {
      alert("login successful");
    } else {
      alert("login failed.");
    }
  })
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  checkUsers();


})