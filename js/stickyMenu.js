var menuBtn = document.getElementsByClassName("mobile-menu-button")[0];
var cntr = document.getElementById("main");
var lastScroll = 0;

function StickyMenu() {
  if (cntr.scrollTop < lastScroll) {
    menuBtn.classList.add("menu-btn-show");
    menuBtn.classList.remove("menu-btn-hide");
  } else {
    menuBtn.classList.remove("menu-btn-show");
    menuBtn.classList.add("menu-btn-hide");
  }

  lastScroll = cntr.scrollTop;
}

cntr.onscroll = StickyMenu;
