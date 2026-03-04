const subirBtn = document.getElementById("subirBtn");

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