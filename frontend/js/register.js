const passwordInput = document.querySelector("#registerPassword");
const verPassword = document.querySelector("#togglePassword");

verPassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    verPassword.classList.remove("bi-eye-slash");
    verPassword.classList.add("bi-eye");
  } else {
    passwordInput.type = "password";
    verPassword.classList.remove("bi-eye");
    verPassword.classList.add("bi-eye-slash");
  }
});
const passwordContainer = document.querySelector("#confirmContainer");
const confirmPasswordInput = document.querySelector("#confirmPassword");
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length > 0) {
    passwordContainer.classList.remove("d-none");
    confirmPasswordInput.setAttribute("required", "true");
  } else {
    passwordContainer.classList.add("d-none");
    confirmPasswordInput.removeAttribute("required");
  }
});
//aqui
document
  .getElementById("formRegistro")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
    };

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "¡Registro exitoso!");
        window.location.href = "login.html";
      } else {
        alert(`Error: ${data.message || "No se pudo registrar"}`);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  });
