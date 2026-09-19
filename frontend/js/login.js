const btnContraseñaInput = document.querySelector("#floatingPassword");
const btnVerContraseña = document.querySelector("#togglePassword");

btnVerContraseña.addEventListener("click", () => {
  if (btnContraseñaInput.type === "password") {
    btnContraseñaInput.type = "text";
    btnVerContraseña.classList.remove("bi-eye-slash");
    btnVerContraseña.classList.add("bi-eye");
  } else {
    btnContraseñaInput.type = "password";
    btnVerContraseña.classList.remove("bi-eye");
    btnVerContraseña.classList.add("bi-eye-slash");
  }
});
const mostrarModalDeBienvenida = () => {
  const modalContainer = document.querySelector("#modalContainer");
  modalContainer.innerHTML = `
        <div class="modal fade" id="welcomeModal" tabindex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 p-3">
          <div class="modal-header border-0">
            <h5 class="modal-title fw-bold text-dark" id="welcomeModalLabel">¡Bienvenido a la plataforma! 🎉</h5>
          </div>
          <div class="modal-body text-center">
            <p class="text-muted small mb-4">Para empezar, personaliza tu cuenta agregando una foto de perfil.</p>
            
            <div class="mb-3">
              <img src="https://via.placeholder.com/120" alt="Avatar Preview" class="rounded-circle shadow-sm object-fit-cover" width="110" height="110" id="modalAvatarPreview">
            </div>

            <div class="mb-3 text-start">
              <label for="subirFotoPerfil" class="form-label small fw-semibold">Elige una imagen</label>
              <input class="form-control form-control-sm rounded-3" type="file" id="subirFotoPerfil" accept="image/*">
            </div>
          </div>
          <div class="modal-footer border-0 justify-content-between">
            <button type="button" class="btn btn-outline-secondary rounded-3 px-3" data-bs-dismiss="modal">Omitir</button>
            <button type="button" class="btn btn-success rounded-3 px-4 shadow-sm" id="btnGuardarFoto">Guardar y continuar</button>
          </div>
        </div>
      </div>
    </div>
    `;
  const modalElemento = document.querySelector("#welcomeModal");
  const miModal = new bootstrap.modal(modalElemento);
  miModal.show();

  const guardarFotoPerfil = document.querySelector("#btnGuardarFoto");
  guardarFotoPerfil.addEventListener("click", () => {
    alert("Foto de perfil guardado con exito");
    miModal.hide();
  });
};
mostrarModalDeBienvenida();
