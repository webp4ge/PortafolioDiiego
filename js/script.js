document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  // Mostrar el pop-up al cargar la página
  popup.classList.add("show");

  // Cerrar el pop-up al hacer clic en el botón de cierre
  closePopup.addEventListener("click", function () {
    closePopupAnimation();
  });

  // Cerrar el pop-up al hacer clic fuera del contenido
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopupAnimation();
    }
  });

  // Cerrar el pop-up al presionar la tecla Esc
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closePopupAnimation();
    }
  });

  // Función para manejar la animación de cierre
  function closePopupAnimation() {
    popup.classList.remove("show"); // Quita la clase 'show'
    popup.classList.add("hide"); // Agrega la clase 'hide' para la animación de cierre

    // Espera a que termine la animación de cierre antes de ocultar el pop-up
    setTimeout(() => {
      popup.classList.remove("hide"); // Quita la clase 'hide'
    }, 500); // Cambiado de 300ms a 500ms
  }
});