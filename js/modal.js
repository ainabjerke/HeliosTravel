function onClick(element) {
  document.querySelector("#blog-img-01").src = element.src;
  document.querySelector("#blog-img-01").alt = element.alt;
  document.querySelector("#blog-modal-01").style.display = "block";
}