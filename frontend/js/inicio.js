// ---- Referencias a elementos del navbar ----
const navInvitado = document.querySelector("#navInvitado");
const navInvitadoRegistro = document.querySelector("#navInvitadoRegistro");
const navUsuario = document.querySelector("#navUsuario");
const navLogout = document.querySelector("#navLogout");
const nombreUsuario = document.querySelector("#nombreUsuario");
const btnLogout = document.querySelector("#btnLogout");

// ---- Toast reutilizable ----
function mostrarToast(mensaje, tipo = "primary") {
  const toastEl = document.querySelector("#toastGeneral");
  const toastMensaje = document.querySelector("#toastMensaje");

  toastMensaje.textContent = mensaje;
  toastEl.className = `toast align-items-center text-bg-${tipo} border-0`;

  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}

// ---- Chequeo de sesión ----
// Cuando login.js guarde el login, debería hacer algo como:
// localStorage.setItem("usuario", JSON.stringify({ nombre: "...", token: "..." }));
function chequearSesion() {
  const usuarioGuardado = localStorage.getItem("usuario");

  if (usuarioGuardado) {
    const usuario = JSON.parse(usuarioGuardado);

    navInvitado.classList.add("d-none");
    navInvitadoRegistro.classList.add("d-none");
    navUsuario.classList.remove("d-none");
    navLogout.classList.remove("d-none");
    nombreUsuario.textContent = `Hola, ${usuario.nombre}`;
  } else {
    navInvitado.classList.remove("d-none");
    navInvitadoRegistro.classList.remove("d-none");
    navUsuario.classList.add("d-none");
    navLogout.classList.add("d-none");
  }
}

// ---- Logout ----
btnLogout.addEventListener("click", () => {
  localStorage.removeItem("usuario");
  mostrarToast("Sesión cerrada correctamente", "secondary");
  chequearSesion();
});

// ---- Al cargar la página ----
document.addEventListener("DOMContentLoaded", () => {
  chequearSesion();

  // Si venís de un login/registro exitoso, podés mandar un mensaje por
  // sessionStorage y mostrarlo acá como toast, por ejemplo:
  const mensajePendiente = sessionStorage.getItem("mensajeToast");
  if (mensajePendiente) {
    mostrarToast(mensajePendiente, "success");
    sessionStorage.removeItem("mensajeToast");
  }
});
