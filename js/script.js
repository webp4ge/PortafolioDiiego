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

  const backToTopButton = document.getElementById("backToTop");

  // Mostrar el botón cuando el usuario se desplaza hacia abajo
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) { // Cambiado a 200 píxeles
      backToTopButton.style.display = "flex"; // Mostrar el botón
    } else {
      backToTopButton.style.display = "none"; // Ocultar el botón
    }
  });

  // Volver a la parte superior al hacer clic en el botón
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  });

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeModal = document.querySelector(".close-modal");

  // Manejar clic en las imágenes de la galería
  document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "flex"; // Mostrar el modal
      modalImg.src = this.src; // Establecer la imagen en el modal
    });
  });

  // Cerrar el modal al hacer clic en el botón de cierre
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Cerrar el modal al hacer clic fuera de la imagen
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Manejar clic en las imágenes de la galería
  document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", function () {
      // Alternar la clase 'zoomed' para aplicar o quitar el zoom
      if (this.classList.contains("zoomed")) {
        this.classList.remove("zoomed"); // Quitar el zoom si ya está aplicado
      } else {
        // Quitar el zoom de cualquier otra imagen antes de aplicar
        document.querySelectorAll(".gallery-img.zoomed").forEach(zoomedImg => {
          zoomedImg.classList.remove("zoomed");
        });
        this.classList.add("zoomed"); // Aplicar el zoom a la imagen actual
      }
    });
  });
});