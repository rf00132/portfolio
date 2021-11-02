import Cookies from '../js-cookie/js.cookie.mjs';

let inSettingsMenu = false;
let showDetailedCookies = false;

let functionCookies = false;
let perfalyseCookies = false;
let forensicsCookie = false;
let hotjarCookie = false;
let linkedinCookie = false;
let facebookCookie = false;
let googleCookie = false;
let tawkCookie = false;

const popUp = document.getElementById("cookie-popup");

const funcCookiesEnable = document.getElementById("func-cookies-enable");
const funcCookiesDisable = document.getElementById("func-cookies-disable");

const perfCookiesEnable = document.getElementById("perf-cookies-enable");
const perfCookiesDisable = document.getElementById("perf-cookies-disable");

const forenCookieEnable = document.getElementById("foren-cookie-enable");
const forenCookieDisable = document.getElementById("foren-cookie-disable");

const hotjarCookieEnable = document.getElementById("hotjar-cookie-enable");
const hotjarCookieDisable = document.getElementById("hotjar-cookie-disable");

const linkedinCookieEnable = document.getElementById("linkedin-cookie-enable");
const linkedinCookieDisable = document.getElementById("linkedin-cookie-disable");

const facebookCookieEnable = document.getElementById("facebook-cookie-enable");
const facebookCookieDisable = document.getElementById("facebook-cookie-disable");

const googleCookieEnable = document.getElementById("google-cookie-enable");
const googleCookieDisable = document.getElementById("google-cookie-disable");

const tawkCookieEnable = document.getElementById("tawk-cookie-enable");
const tawkCookieDisable = document.getElementById("tawk-cookie-disable");

funcCookiesEnable.addEventListener("click", function(){ 
    if(!functionCookies){
        functionCookies = true;
        SwapButtons(funcCookiesDisable, funcCookiesEnable);
    }  
})
funcCookiesDisable.addEventListener("click", function(){ 
    if(functionCookies){
        functionCookies = false;
        SwapButtons(funcCookiesEnable, funcCookiesDisable);
    }  
})

perfCookiesEnable.addEventListener("click", function(){ 
    if(!perfalyseCookies){
        perfalyseCookies = true;
        SwapButtons(perfCookiesDisable, perfCookiesEnable);
    }  
})
perfCookiesDisable.addEventListener("click", function(){ 
    if(perfalyseCookies){
        perfalyseCookies = false;
        SwapButtons(perfCookiesEnable, perfCookiesDisable);
    }  
})

forenCookieEnable.addEventListener("click", function(){ 
    if(!forensicsCookie){
        forensicsCookie = true;
        SwapButtons(forenCookieDisable, forenCookieEnable);
    }  
})
forenCookieDisable.addEventListener("click", function(){ 
    if(forensicsCookie){
        forensicsCookie = false;
        SwapButtons(forenCookieEnable, forenCookieDisable);
    }  
})

hotjarCookieEnable.addEventListener("click", function(){ 
    if(!hotjarCookie){
        hotjarCookie = true;
        SwapButtons(hotjarCookieDisable, hotjarCookieEnable);
    }  
})
hotjarCookieDisable.addEventListener("click", function(){ 
    if(hotjarCookie){
        hotjarCookie = false;
        SwapButtons(hotjarCookieEnable, hotjarCookieDisable);
    }  
})

linkedinCookieEnable.addEventListener("click", function(){ 
    if(!linkedinCookie){
        linkedinCookie = true;
        SwapButtons(linkedinCookieDisable, linkedinCookieEnable);
    }  
})
linkedinCookieDisable.addEventListener("click", function(){ 
    if(linkedinCookie){
        linkedinCookie = false;
        SwapButtons(linkedinCookieEnable, linkedinCookieDisable);
    }
})

facebookCookieEnable.addEventListener("click", function(){ 
    if(!facebookCookie){
        facebookCookie = true;
        SwapButtons(facebookCookieDisable, facebookCookieEnable);
    }  
})
facebookCookieDisable.addEventListener("click", function(){ 
    if(facebookCookie){
        facebookCookie = false;
        SwapButtons(facebookCookieEnable, facebookCookieDisable);
    }
})

googleCookieEnable.addEventListener("click", function(){ 
    if(!googleCookie){
        googleCookie = true;
        SwapButtons(googleCookieDisable, googleCookieEnable);
    }  
})
googleCookieDisable.addEventListener("click", function(){ 
    if(googleCookie){
        googleCookie = false;
        SwapButtons(googleCookieEnable, googleCookieDisable);
    }
})

tawkCookieEnable.addEventListener("click", function(){ 
    if(!tawkCookie){
        tawkCookie = true;
        SwapButtons(tawkCookieDisable, tawkCookieEnable);
    }  
})
tawkCookieDisable.addEventListener("click", function(){
    if(tawkCookie){
        tawkCookie = false;
        SwapButtons(tawkCookieEnable, tawkCookieDisable);
    }
})

function SwapButtons(whiteBtn, purpleBtn){
    purpleBtn.classList.add("purple-btn");
    purpleBtn.classList.remove("white-btn");
    whiteBtn.classList.remove("purple-btn");
    whiteBtn.classList.add("white-btn");
}


const acceptCookiesBtn = document.getElementById("accept-cookies-btn");
const cookieSettingsBtn = document.getElementById("cookie-settings-btn");
const cookieDetailsBtn = document.getElementById("cookie-details-btn");
const acceptDetailCookiesBtn = document.getElementById("accept-detail-cookies-btn");
const backToFirstScreenBtn = document.getElementById("return-to-cookies-btn");

acceptCookiesBtn.addEventListener("click", AcceptCookies);
cookieSettingsBtn.addEventListener("click", ShowSettingsMenu);
cookieDetailsBtn.addEventListener("click", ShowDetailCookies);
acceptDetailCookiesBtn.addEventListener("click", OnShownAcceptCookies);
backToFirstScreenBtn.addEventListener("click", ShowSettingsMenu);

function ShowSettingsMenu(){
    if(inSettingsMenu){
        inSettingsMenu = false;
        popUp.classList.remove("show-settings");
        popUp.classList.add("hide-settings");
        popUp.classList.remove("hide-main");
        popUp.classList.add("show-main");
    }
    else{
        inSettingsMenu = true;
        popUp.classList.add("show-settings");
        popUp.classList.remove("hide-settings");
        popUp.classList.add("hide-main");
        popUp.classList.remove("show-main");
    } 
}


function ShowDetailCookies(){
    if(showDetailedCookies){
        showDetailedCookies = false;
        popUp.classList.remove("show-detail");
        popUp.classList.add("hide-detail");
        cookieDetailsBtn.textContent = "show detailed preferences";
    }
    else{
        showDetailedCookies = true;
        popUp.classList.add("show-detail");
        popUp.classList.remove("hide-detail");
        cookieDetailsBtn.textContent = "hide detailed preferences";
    }
}

function AcceptCookies(){
    Cookies.set("cookiesSet", "true");
    Cookies.set("functionalCookies", "accepted");
    Cookies.set("perfalyseCookies", "accepted");
    AcceptDetailedCookies();
    popUp.classList.remove("show-popup");
    popUp.classList.add("hide-popup");
}

function OnShownAcceptCookies(){
    Cookies.set("cookiesSet", "true");
    if(functionCookies){
        Cookies.set("functionalCookies", "accepted");
    }
    if(perfalyseCookies){
        Cookies.set("perfalyseCookies", "accepted");
    }
    if(showDetailedCookies){
        OnShowAcceptDetailedCookies();
    } else {
        AcceptDetailedCookies();
    }
    popUp.classList.remove("show-popup");
    popUp.classList.add("hide-popup");
}

function AcceptDetailedCookies(){
    Cookies.set("forensics", "accepted");
    Cookies.set("hotjar", "accepted");
    Cookies.set("linkedin", "accepted");
    Cookies.set("facebook", "accepted");
    Cookies.set("google", "accepted");
    Cookies.set("tawk", "accepted");
}

function OnShowAcceptDetailedCookies(){
    if(forensicsCookie){
        Cookies.set("forensics", "accepted");
    }
    if(hotjarCookie){
        Cookies.set("hotjar", "accepted");
    }
    if(linkedinCookie){
        Cookies.set("linkedin", "accepted");
    }
    if(facebookCookie){
        Cookies.set("facebook", "accepted");
    }
    if(googleCookie){
        Cookies.set("google", "accepted");
    }
    if(tawkCookie){
        Cookies.set("tawk", "accepted");
    }
}


function CheckForCookies(){
    if(Cookies.get("cookiesSet") != "true"){
        DisplayPopup();
    }
}

function DisplayPopup(){
    popUp.classList.add("show-popup");
    popUp.classList.remove("hide-popup");
}

CheckForCookies();