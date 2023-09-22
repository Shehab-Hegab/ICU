function validateForm() {
  let errorMessage = document.getElementById("errorMessage");
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  console.log(username);
  console.log(password);

  // Define the allowed usernames and passwords
  let allowedCredentials = [
    { username: "Ahmed Khaled", password: "123" },
    { username: "Gamica", password: "123" },
    { username: "kirolos", password: "123" },
    { username: "Dr Ahmed Hesham", password: "123" },
  ];

  // Check if the entered credentials match any of the allowed ones
  for (let i = 0; i < allowedCredentials.length; i++) {
    let credential = allowedCredentials[i];
    if (username === credential.username) {
      if (password === credential.password) {
        window.location.href = "welcome.html";
        errorMessage.textContent = "";
        return true;
      } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
        return false;
      }
    } else {
      errorMessage.textContent =
        "Incorrect Username or Password. Please try again.";
      return false;
    }
  }
}

// Add an event listener to the login button
const loginButton = document.querySelector(".submit");
loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  errorMessage.textContent = "";
  validateForm();
});

console.log("Login");
