const loginForm = document.querySelector("#loginForm");

const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

let users = JSON.parse(localStorage.users);

const loggedInUser = () => {
  localStorage.setItem("loggedInUser", JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value,
    })
  );
};

const clearLoginFields = () => {
  loginEmail.value = "";
  loginPassword.value = "";
}

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

    clearLoginFields();
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  checkUserInfo();
});
