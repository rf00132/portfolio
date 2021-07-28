var i = 0;
var j = 0;
var speed = 50;

let obj = document.getElementById('typewriter');

let line1 = obj.childNodes[1].innerHTML;
let line2 = obj.childNodes[3].innerHTML;
obj.childNodes[1].innerHTML = "";
obj.childNodes[3].innerHTML = "";
console.log(line1);
console.log(line2);
function typewriter(){
    if(i < line1.length){
        obj.childNodes[1].innerHTML += line1.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
    else if(j < line2.length){
        obj.childNodes[3].innerHTML += line2.charAt(j);
        j++;
        setTimeout(typewriter, speed);
    } 
}
typewriter();