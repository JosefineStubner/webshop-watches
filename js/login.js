const loginForm = document.querySelector("#loginForm");

const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

const loggedInUser = () => {
  localStorage.removeItem("loggedInUser")
  localStorage.setItem("loggedInUser", JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value,
    })
  );

};

let users = JSON.parse(localStorage.users);

const checkUserInfo = () => {
  users.forEach((user) => {
    if (user.email === loginEmail.value) {
      if (user.password === loginPassword.value) {
        alert("login successful");
        loggedInUser();
      } else {
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
