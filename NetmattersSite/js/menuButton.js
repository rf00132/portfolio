
var button = document.getElementById("btn-sidemenu");
var menu = document.getElementById("sidemenu");
var overlay = document.getElementById("overlay");
var hidden = true;
var btnInner = document.getElementsByClassName("hamburger--spin")[0];

button.addEventListener("click", ToggleMenu);
overlay.addEventListener("click", CloseMenu);


function ToggleMenu() {
  
  if (hidden) {
    menu.classList.add("anim");
    cntr.classList.add("anim");
    cntr.classList.add("cntr-move");
    cntr.classList.remove("cntr-normal");
    header.classList.add("header-move");
    header.classList.remove("header-normal");
    menu.classList.add("sidemenu-show");
    menu.classList.remove("sidemenu-hide");
    btnInner.classList.add("is-active");
    overlay.style.display = "block";
    hidden = false;
    setTimeout(function () {
      menu.classList.remove("anim");
      cntr.classList.remove("anim");
    }, 500);
  } else {
    CloseMenu();
  }
}

function CloseMenu() {
  menu.classList.add("anim");
  cntr.classList.add("anim");
  menu.classList.add("sidemenu-hide");
  menu.classList.remove("sidemenu-show");
  cntr.classList.add("cntr-normal");
  cntr.classList.remove("cntr-move");
  header.classList.add("header-normal");
  header.classList.remove("header-move");
  btnInner.classList.remove("is-active");
  overlay.style.display = "none";
  hidden = true;
  setTimeout(function () {
    menu.classList.remove("anim");
    cntr.classList.remove("anim");
  }, 500);
}