document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (loginForm) {
      loginForm.addEventListener("submit", function(event) {
          event.preventDefault();
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          // Validate login (This is just a simple example, in real applications use secure authentication)
          if (username === "user" && password === "password") {
              alert("Login successful");
              window.location.href = "quiz.html";
          } else {
              alert("Invalid username or password");
          }
      });
  }

  if (registerForm) {
      registerForm.addEventListener("submit", function(event) {
          event.preventDefault();
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          // Simple registration logic (In real applications, save user data securely)
          alert(`Registration successful for ${username}`);
          window.location.href = "index.html";
      });
  }
});
