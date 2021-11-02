"use strict";

var _jsCookie = _interopRequireDefault(require("../js-cookie/js.cookie.mjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inSettingsMenu = false;
var showDetailedCookies = false;
var functionCookies = false;
var perfalyseCookies = false;
var forensicsCookie = false;
var hotjarCookie = false;
var linkedinCookie = false;
var facebookCookie = false;
var googleCookie = false;
var tawkCookie = false;
var popUp = document.getElementById("cookie-popup");
var funcCookiesEnable = document.getElementById("func-cookies-enable");
var funcCookiesDisable = document.getElementById("func-cookies-disable");
var perfCookiesEnable = document.getElementById("perf-cookies-enable");
var perfCookiesDisable = document.getElementById("perf-cookies-disable");
var forenCookieEnable = document.getElementById("foren-cookie-enable");
var forenCookieDisable = document.getElementById("foren-cookie-disable");
var hotjarCookieEnable = document.getElementById("hotjar-cookie-enable");
var hotjarCookieDisable = document.getElementById("hotjar-cookie-disable");
var linkedinCookieEnable = document.getElementById("linkedin-cookie-enable");
var linkedinCookieDisable = document.getElementById("linkedin-cookie-disable");
var facebookCookieEnable = document.getElementById("facebook-cookie-enable");
var facebookCookieDisable = document.getElementById("facebook-cookie-disable");
var googleCookieEnable = document.getElementById("google-cookie-enable");
var googleCookieDisable = document.getElementById("google-cookie-disable");
var tawkCookieEnable = document.getElementById("tawk-cookie-enable");
var tawkCookieDisable = document.getElementById("tawk-cookie-disable");
funcCookiesEnable.addEventListener("click", function () {
  if (!functionCookies) {
    functionCookies = true;
    SwapButtons(funcCookiesDisable, funcCookiesEnable);
  }
});
funcCookiesDisable.addEventListener("click", function () {
  if (functionCookies) {
    functionCookies = false;
    SwapButtons(funcCookiesEnable, funcCookiesDisable);
  }
});
perfCookiesEnable.addEventListener("click", function () {
  if (!perfalyseCookies) {
    perfalyseCookies = true;
    SwapButtons(perfCookiesDisable, perfCookiesEnable);
  }
});
perfCookiesDisable.addEventListener("click", function () {
  if (perfalyseCookies) {
    perfalyseCookies = false;
    SwapButtons(perfCookiesEnable, perfCookiesDisable);
  }
});
forenCookieEnable.addEventListener("click", function () {
  if (!forensicsCookie) {
    forensicsCookie = true;
    SwapButtons(forenCookieDisable, forenCookieEnable);
  }
});
forenCookieDisable.addEventListener("click", function () {
  if (forensicsCookie) {
    forensicsCookie = false;
    SwapButtons(forenCookieEnable, forenCookieDisable);
  }
});
hotjarCookieEnable.addEventListener("click", function () {
  if (!hotjarCookie) {
    hotjarCookie = true;
    SwapButtons(hotjarCookieDisable, hotjarCookieEnable);
  }
});
hotjarCookieDisable.addEventListener("click", function () {
  if (hotjarCookie) {
    hotjarCookie = false;
    SwapButtons(hotjarCookieEnable, hotjarCookieDisable);
  }
});
linkedinCookieEnable.addEventListener("click", function () {
  if (!linkedinCookie) {
    linkedinCookie = true;
    SwapButtons(linkedinCookieDisable, linkedinCookieEnable);
  }
});
linkedinCookieDisable.addEventListener("click", function () {
  if (linkedinCookie) {
    linkedinCookie = false;
    SwapButtons(linkedinCookieEnable, linkedinCookieDisable);
  }
});
facebookCookieEnable.addEventListener("click", function () {
  if (!facebookCookie) {
    facebookCookie = true;
    SwapButtons(facebookCookieDisable, facebookCookieEnable);
  }
});
facebookCookieDisable.addEventListener("click", function () {
  if (facebookCookie) {
    facebookCookie = false;
    SwapButtons(facebookCookieEnable, facebookCookieDisable);
  }
});
googleCookieEnable.addEventListener("click", function () {
  if (!googleCookie) {
    googleCookie = true;
    SwapButtons(googleCookieDisable, googleCookieEnable);
  }
});
googleCookieDisable.addEventListener("click", function () {
  if (googleCookie) {
    googleCookie = false;
    SwapButtons(googleCookieEnable, googleCookieDisable);
  }
});
tawkCookieEnable.addEventListener("click", function () {
  if (!tawkCookie) {
    tawkCookie = true;
    SwapButtons(tawkCookieDisable, tawkCookieEnable);
  }
});
tawkCookieDisable.addEventListener("click", function () {
  if (tawkCookie) {
    tawkCookie = false;
    SwapButtons(tawkCookieEnable, tawkCookieDisable);
  }
});

function SwapButtons(whiteBtn, purpleBtn) {
  purpleBtn.classList.add("purple-btn");
  purpleBtn.classList.remove("white-btn");
  whiteBtn.classList.remove("purple-btn");
  whiteBtn.classList.add("white-btn");
}

var acceptCookiesBtn = document.getElementById("accept-cookies-btn");
var cookieSettingsBtn = document.getElementById("cookie-settings-btn");
var cookieDetailsBtn = document.getElementById("cookie-details-btn");
var acceptDetailCookiesBtn = document.getElementById("accept-detail-cookies-btn");
var backToFirstScreenBtn = document.getElementById("return-to-cookies-btn");
acceptCookiesBtn.addEventListener("click", AcceptCookies);
cookieSettingsBtn.addEventListener("click", ShowSettingsMenu);
cookieDetailsBtn.addEventListener("click", ShowDetailCookies);
acceptDetailCookiesBtn.addEventListener("click", OnShownAcceptCookies);
backToFirstScreenBtn.addEventListener("click", ShowSettingsMenu);

function ShowSettingsMenu() {
  if (inSettingsMenu) {
    inSettingsMenu = false;
    popUp.classList.remove("show-settings");
    popUp.classList.add("hide-settings");
    popUp.classList.remove("hide-main");
    popUp.classList.add("show-main");
  } else {
    inSettingsMenu = true;
    popUp.classList.add("show-settings");
    popUp.classList.remove("hide-settings");
    popUp.classList.add("hide-main");
    popUp.classList.remove("show-main");
  }
}

function ShowDetailCookies() {
  if (showDetailedCookies) {
    showDetailedCookies = false;
    popUp.classList.remove("show-detail");
    popUp.classList.add("hide-detail");
    cookieDetailsBtn.textContent = "show detailed preferences";
  } else {
    showDetailedCookies = true;
    popUp.classList.add("show-detail");
    popUp.classList.remove("hide-detail");
    cookieDetailsBtn.textContent = "hide detailed preferences";
  }
}

function AcceptCookies() {
  _jsCookie.default.set("cookiesSet", "true");

  _jsCookie.default.set("functionalCookies", "accepted");

  _jsCookie.default.set("perfalyseCookies", "accepted");

  AcceptDetailedCookies();
  popUp.classList.remove("show-popup");
  popUp.classList.add("hide-popup");
}

function OnShownAcceptCookies() {
  _jsCookie.default.set("cookiesSet", "true");

  if (functionCookies) {
    _jsCookie.default.set("functionalCookies", "accepted");
  }

  if (perfalyseCookies) {
    _jsCookie.default.set("perfalyseCookies", "accepted");
  }

  if (showDetailedCookies) {
    OnShowAcceptDetailedCookies();
  } else {
    AcceptDetailedCookies();
  }

  popUp.classList.remove("show-popup");
  popUp.classList.add("hide-popup");
}

function AcceptDetailedCookies() {
  _jsCookie.default.set("forensics", "accepted");

  _jsCookie.default.set("hotjar", "accepted");

  _jsCookie.default.set("linkedin", "accepted");

  _jsCookie.default.set("facebook", "accepted");

  _jsCookie.default.set("google", "accepted");

  _jsCookie.default.set("tawk", "accepted");
}

function OnShowAcceptDetailedCookies() {
  if (forensicsCookie) {
    _jsCookie.default.set("forensics", "accepted");
  }

  if (hotjarCookie) {
    _jsCookie.default.set("hotjar", "accepted");
  }

  if (linkedinCookie) {
    _jsCookie.default.set("linkedin", "accepted");
  }

  if (facebookCookie) {
    _jsCookie.default.set("facebook", "accepted");
  }

  if (googleCookie) {
    _jsCookie.default.set("google", "accepted");
  }

  if (tawkCookie) {
    _jsCookie.default.set("tawk", "accepted");
  }
}

function CheckForCookies() {
  if (_jsCookie.default.get("cookiesSet") != "true") {
    DisplayPopup();
  }
}

function DisplayPopup() {
  popUp.classList.add("show-popup");
  popUp.classList.remove("hide-popup");
}

CheckForCookies();