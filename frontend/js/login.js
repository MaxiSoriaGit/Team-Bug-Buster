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
//aqui
document.getElementById("formLogin").addEventListener("submit", async (e) => {
  e.preventDefault();

  const credentials = {
    email: document.getElementById("email").value, // o username según pida el backend
    password: document.getElementById("password").value,
  };

  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.ok) {
      alert("¡Bienvenido!");
      window.location.href = "dashboard.html";
    } else {
      alert(`Error: ${data.message || "Credenciales inválidas"}`);
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
});
