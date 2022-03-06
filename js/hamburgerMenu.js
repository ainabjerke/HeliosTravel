function topNavFunction() {
  var x = document.querySelector("#myTopnav");
  var hamburgerIcon = document.querySelector("#myTopnav .icon");
  if (x.className === "topnav") {
    x.className += " responsive";

    hamburgerIcon.innerHTML = "&#9587;";
  } else {
    x.className = "topnav";
    hamburgerIcon.innerHTML = "&#9776;";
  }
}
