"use strict";

var header = document.getElementById("header");
var main = document.getElementById("slider");
var tracker = document.getElementById("position-tracker");
var cntr = document.getElementById("content");
var sticky = 200;
var lastScroll = 0;

function stickyHeader() {
  if (cntr.scrollTop < lastScroll) {
    header.classList.add("sticky-show");
    header.classList.remove("sticky-hide");
  } else {
    header.classList.remove("sticky-show");
    header.classList.add("sticky-hide");
  }

  lastScroll = cntr.scrollTop;
}

cntr.onscroll = function () {
  if (cntr.scrollTop > sticky) {
    header.classList.add("sticky");
    main.classList.add("extra-margin");
    stickyHeader();
  } else if (cntr.scrollTop == 0) {
    header.classList.remove("sticky");
    header.classList.remove("sticky-show");
    main.classList.remove("extra-margin");
  }
};