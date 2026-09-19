const passwordInput = document.querySelector("#registerPassword");
const verPassword = document.querySelector("#togglePassword");

verPassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    verPassword.classList.remove("bi-eye");
    verPassword.classList.add("bi-eye-slash");
  } else {
    passwordInput.type = "password";
    verPassword.classList.remove("bi-eye-slash");
    verPassword.classList.add("bi-eye");
  }
});
const passwordContainer = document.querySelector("#confirmContainer");
const confirmPasswordInput = document.querySelector("#ConfirmPassword");
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length > 0) {
    passwordContainer.classList.remove("d-none");
    confirmPasswordInput.classList.setAttribute("required", "true");
  } else {
    passwordContainer.classList.add("d-none");
    confirmPasswordInput.removeAttribute("required");
  }
});
