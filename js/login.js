const loginForm = document.querySelector("#loginForm");

const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

let users = JSON.parse(localStorage.users);

const checkUserInfo = () => {
  users.forEach((user) => {
    if (user.email === loginEmail.value && user.password === loginPassword.value) {
      alert("login successful");
    } 
    // else if (user.email !== loginEmail.value && user.password !== loginPassword.value) {
    //   alert("login failed");
    // }
    // else {
    //   alert("login failed.");
    // }

  })

  loginEmail.value = "";
  loginPassword.value = "";

}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  checkUserInfo();


})