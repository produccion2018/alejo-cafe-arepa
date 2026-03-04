const subirBtn = document.getElementById("subirBtn");

if (subirBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      subirBtn.style.display = "block";
    } else {
      subirBtn.style.display = "none";
    }
  });

  subirBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// imagen 

const foto = document.getElementById("fotoNosotros");
const modal = document.getElementById("modalImagen");
const imagenGrande = document.getElementById("imagenGrande");
const cerrar = document.querySelector(".cerrar");

foto.onclick = function () {
  modal.style.display = "block";
  imagenGrande.src = this.src;
};

cerrar.onclick = function () {
  modal.style.display = "none";
};

modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};