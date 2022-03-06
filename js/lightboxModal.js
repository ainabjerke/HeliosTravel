function openModalLightbox() {
  document.getElementById("lightBoxModal").style.display = "block";
}

function closeModalLightbox() {
  document.getElementById("lightBoxModal").style.display = "none";
}

var slideIndexLightbox = 1;
showSlidesLightbox(slideIndexLightbox);

function plusSlidesLightbox(l) {
  showSlidesLightbox((slideIndexLightbox += l));
}

function currentSlideLightbox(l) {
  showSlidesLightbox((slideIndexLightbox = l));
}

function showSlidesLightbox(l) {
  var j;
  var slidesLightbox = document.getElementsByClassName("mySlides");
  var dotsLightbox = document.getElementsByClassName("img-demo");
  var captionTextLightbox = document.getElementById("caption");
  if (l > slidesLightbox.length) {
    slideIndexLightbox = 1;
  }
  if (l < 1) {
    slideIndexLightbox = slidesLightbox.length;
  }
  for (j = 0; j < slidesLightbox.length; j++) {
    slidesLightbox[j].style.display = "none";
  }
  for (j = 0; j < dotsLightbox.length; j++) {
    dotsLightbox[j].className = dotsLightbox[j].className.replace(
      " active",
      ""
    );
  }
  if (slidesLightbox.length == 0) {
    return;
  }
  slidesLightbox[slideIndexLightbox - 1].style.display = "block";
  dotsLightbox[slideIndexLightbox - 1].className += " active";
  captionTextLightbox.innerHTML = dotsLightbox[slideIndexLightbox - 1].alt;
}
