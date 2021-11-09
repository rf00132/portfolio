let i = 0;
let j = 0;
var speed = 50;

let obj = document.getElementById('typewriter');

let line1 = obj.childNodes[1].innerHTML;
obj.childNodes[1].innerHTML = "";

let line2 = obj.childNodes[3].innerHTML;
obj.childNodes[3].innerHTML = "";

function typewriter() {
    if (i < line1.length) {
        obj.childNodes[1].innerHTML += line1.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    } else if(j < line2.length) {
        obj.childNodes[3].innerHTML += line2.charAt(j);
        j++;
        setTimeout(typewriter, speed);
    } 
}

typewriter();

/*
let lines = [];

function typewriter(){
    for (let i = 0; i < obj.childNodes.length; i++) {
        if(obj.childNodes[i].nodeType === 1){
            lines.push(obj.childNodes[i].innerHTML);
            obj.childNodes[i].innerHTML = "";
            console.log(lines[i]);
        }
        
    }

    for (let i = 0; i < obj.childNodes.length; i++) {
        for(let j = 0; j < lines[i].length; j++){
            console.log(i + ", " + j);
            obj.childNodes[i].innerHTML += lines[x].charAt(j);
            setTimeout(typewriter, speed);
        }
    }
    return;
}
*/
