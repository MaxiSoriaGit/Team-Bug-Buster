const btnContraseñaInput = document.querySelector("#floatingPassword");
const btnVerContraseña = document.querySelector("#togglePassword");

btnVerContraseña.addEventListener("click", () => {
  if (btnContraseñaInput.type === "password") {
    btnContraseñaInput.type = "text";
    btnVerContraseña.classList.remove("bi-eye");
    btnVerContraseña.classList.add("bi-eye-slash");
  } else {
    btnContraseñaInput.type = "password";
    btnVerContraseña.classList.remove("bi-eye");
    btnVerContraseña.classList.add("bi-eye");
  }
});
