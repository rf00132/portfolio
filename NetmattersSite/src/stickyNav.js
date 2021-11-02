const header = document.getElementById("header");
const main = document.getElementById("slider");
const tracker = document.getElementById("position-tracker");
const cntr = document.getElementById("content");

let sticky = 200;
let lastScroll = 0;

function stickyHeader(){
    if ( cntr.scrollTop < lastScroll ){
        header.classList.add("sticky-show");
        header.classList.remove("sticky-hide");

    }
    else {
        header.classList.remove("sticky-show");
        header.classList.add("sticky-hide");

    }
    lastScroll = cntr.scrollTop;
}

cntr.onscroll = function(){ 
    if ( cntr.scrollTop > sticky ){
        header.classList.add("sticky");
        main.classList.add("extra-margin")
        stickyHeader();
    }
    else if(cntr.scrollTop == 0){
        header.classList.remove("sticky");
        header.classList.remove("sticky-show");
        main.classList.remove("extra-margin")
    }
};
