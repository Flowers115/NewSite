/*cursore*/
document.addEventListener("mousemove", function (e) {
  var cursor = document.getElementById("custom-cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.style.opacity = 1; // Assicura che il cursore sia visibile
});

document.addEventListener("mouseleave", function () {
  var cursor = document.getElementById("custom-cursor");
  cursor.style.opacity = 0; // Nasconde il cursore
});

document.addEventListener("mouseenter", function () {
  var cursor = document.getElementById("custom-cursor");
  cursor.style.opacity = 1; // Mostra il cursore
});


/*modal*/
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM completamente caricato!");

  // Seleziona tutti i pulsanti con la classe 'openModalBtn'
  const openModalBtns = document.querySelectorAll(".openModalBtn");

  // Aggiungi event listener a tutti i pulsanti per aprire i modali
  openModalBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var modalId = btn.getAttribute("data-modal");
      var modal = document.getElementById(modalId);
      modal.style.display = "block";
    });
  });

  // Seleziona tutti gli elementi con la classe 'close'
  const closeBtns = document.querySelectorAll(".close");

  // Aggiungi event listener a tutti i pulsanti di chiusura
  closeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var modalId = btn.getAttribute("data-modal");
      var modal = document.getElementById(modalId);
      modal.style.display = "none";
    });
  });

  // Chiudi il modal quando l'utente clicca fuori dal modal
  window.addEventListener("click", function (event) {
    var modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
});
