document.addEventListener("DOMContentLoaded", function () {
    // Objeto de puertas y sus imágenes de regalo
    const puertas = {
      1: { disponible: "Img/r1.jpeg", noDisponible: "Img/e.jpeg" },
      2: { disponible: "Img/r2.jpeg", noDisponible: "Img/e.jpeg" },
      3: { disponible: "Img/r3.jpeg", noDisponible: "Img/e.jpeg" },
      4: { disponible: "Img/r4.jpeg", noDisponible: "Img/e.jpeg" },
      5: { disponible: "Img/r5.jpeg", noDisponible: "Img/e.jpeg" },
      6: { disponible: "Img/r6.jpeg", noDisponible: "Img/e.jpeg" },
      7: { disponible: "Img/r7.jpeg", noDisponible: "Img/e.jpeg" },
      8: { disponible: "Img/r8.jpeg", noDisponible: "Img/e.jpeg" },
      9: { disponible: "Img/r9.jpeg", noDisponible: "Img/e.jpeg" },
      10: { disponible: "Img/r10.jpeg", noDisponible: "Img/e.jpeg" },
      11: { disponible: "Img/r11.jpeg", noDisponible: "Img/e.jpeg" },
      12: { disponible: "Img/r12.jpeg", noDisponible: "Img/e.jpeg" },
      13: { disponible: "Img/r13.jpeg", noDisponible: "Img/e.jpeg" },
      14: { disponible: "Img/r14.jpeg", noDisponible: "Img/e.jpeg" },
      15: { disponible: "Img/r15.jpeg", noDisponible: "Img/e.jpeg" },
      16: { disponible: "Img/r16.jpeg", noDisponible: "Img/e.jpeg" },
      17: { disponible: "Img/r17.jpeg", noDisponible: "Img/e.jpeg" },
      18: { disponible: "Img/r18.jpeg", noDisponible: "Img/e.jpeg" },
      19: { disponible: "Img/r19.jpeg", noDisponible: "Img/e.jpeg" },
      20: { disponible: "Img/r20.jpeg", noDisponible: "Img/e.jpeg" },
      21: { disponible: "Img/r21.jpeg", noDisponible: "Img/e.jpeg" },
      22: { disponible: "Img/r22.jpeg", noDisponible: "Img/e.jpeg" },
      23: { disponible: "Img/r23.jpeg", noDisponible: "Img/e.jpeg" },
      24: { disponible: "Img/r24.jpeg", noDisponible: "Img/e.jpeg" }
    };
  
    const modal = document.getElementById("modal-regalo");
    const modalImg = document.getElementById("regalo-img");
    const closeModal = document.getElementsByClassName("close")[0];
    const today = new Date();
    const diaActual = today.getDate();
    const mesActual = today.getMonth() + 1; // Los meses empiezan desde 0, por eso sumamos 1
  
    // Función para abrir el modal y mostrar la imagen correspondiente
    function abrirModal(imagen) {
      modalImg.src = imagen;
      modal.style.display = "flex";
    }
  
    // Cerrar el modal
    closeModal.onclick = function () {
      modal.style.display = "none";
    };
  
    // Cerrar el modal si se hace clic fuera del contenido
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  
    // Controlar las puertas según la fecha
    for (let i = 1; i <= 24; i++) {
      const puerta = document.getElementById("puerta-" + i);
      const puertaDia = puerta.getAttribute("data-dia");
  
      // Si la fecha del día actual es mayor o igual que el día de la puerta, mostrar la imagen del regalo
      if (mesActual === 12 && diaActual >= puertaDia) {
        puerta.addEventListener("click", function (e) {
          e.preventDefault(); // Evitar que se abra un enlace
          abrirModal(puertas[puertaDia].disponible); // Abre el lightbox con la imagen del regalo
        });
      } else {
        puerta.addEventListener("click", function (e) {
          e.preventDefault(); // Evitar que se abra un enlace
          abrirModal(puertas[puertaDia].noDisponible); // Abre el lightbox con la imagen de "no disponible"
        });
      }
    }
  });
  