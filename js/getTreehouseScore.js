let profileUrl = "https://teamtreehouse.com/rupertfoley2.json";
let jsonData;
let currentPoints;
const pointsDisplay = document.getElementById("points-display");

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
        callback(null, xhr.response);
        } else {
        callback(status, xhr.response);
        }
    };
    xhr.send();
};



function SetCurrentPoints(){
    getJSON(profileUrl, function(err, data){

        if(err!=null){
            console.error(err);
        } else {
            currentPoints = data.points.total;

            console.log(currentPoints);
            pointsDisplay.innerText = 'Total Score: ' + currentPoints;
            
        }
        
    });
    
}

SetCurrentPoints();