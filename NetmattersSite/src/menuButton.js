const button = document.getElementById("btn-sidemenu");
const menu = document.getElementById("sidemenu");
const overlay = document.getElementById("overlay");

let hidden = true;

button.addEventListener("click", ToggleMenu)
overlay.addEventListener("click", CloseMenu)

function ToggleMenu(){
    if(hidden){
        menu.classList.add("anim");
        cntr.classList.add("anim")
        cntr.classList.add("cntr-move");
        cntr.classList.remove("cntr-normal");
        header.classList.add("header-move");
        header.classList.remove("header-normal");
        menu.classList.add("sidemenu-show");
        menu.classList.remove("sidemenu-hide");
        overlay.style.display = "block";
        hidden = false;

        setTimeout(function(){
            menu.classList.remove("anim");
            cntr.classList.remove("anim");
        }, 500);
    }
    else{
        CloseMenu();
    }
}

function CloseMenu(){
    menu.classList.add("anim");
    cntr.classList.add("anim")
    menu.classList.add("sidemenu-hide");
    menu.classList.remove("sidemenu-show");
    cntr.classList.add("cntr-normal");
    cntr.classList.remove("cntr-move");
    header.classList.add("header-normal");
    header.classList.remove("header-move");
    
    
    overlay.style.display = "none";
    hidden = true;

    setTimeout(function(){
        menu.classList.remove("anim");
        cntr.classList.remove("anim");
    }, 500);
}