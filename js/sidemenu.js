"use strict";

var menu = document.getElementById("sidemenu");
var overlay = document.getElementById("overlay");
var hidden = true;
menuBtn.addEventListener("click", ToggleMenu);
overlay.addEventListener("click", CloseMenu);

function ToggleMenu() {
  if (hidden) {
    menu.classList.add("anim");
    cntr.classList.add("anim");
    menuBtn.classList.add("move-menu-btn");
    cntr.classList.add("cntr-move");
    cntr.classList.remove("cntr-normal");
    menu.classList.add("sidemenu-show");
    menu.classList.remove("sidemenu-hide");
    overlay.style.display = "block";
    menuBtn.classList.toggle("is-active");
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
  menuBtn.classList.remove("move-menu-btn");
  menu.classList.add("sidemenu-hide");
  menu.classList.remove("sidemenu-show");
  cntr.classList.add("cntr-normal");
  cntr.classList.remove("cntr-move");
  overlay.style.display = "none";
  hidden = true;
  menuBtn.classList.toggle("is-active");
  setTimeout(function () {
    menu.classList.remove("anim");
    cntr.classList.remove("anim");
  }, 500);
}