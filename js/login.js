const loginForm = document.querySelector("#loginForm");

const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

let users = JSON.parse(localStorage.users);

const loggedInUser = () => {
  localStorage.setItem("loggedInUser", JSON.stringify({
    email: loginEmail.value,
    password: loginPassword.value
    }))
}

const checkUserInfo = () => {
  users.forEach((user) => {
    if (user.email === loginEmail.value && user.password === loginPassword.value) {
      alert("login successful");
      loggedInUser();
    } 

  })

  loginEmail.value = "";
  loginPassword.value = "";

}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  checkUserInfo();


})