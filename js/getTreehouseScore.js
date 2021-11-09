"use strict";

var profileUrl = "https://teamtreehouse.com/rupertfoley2.json";
var jsonData;
var currentPoints;
var pointsDisplay = document.getElementById("points-display");

var getJSON = function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
};

function SetCurrentPoints() {
  getJSON(profileUrl, function (err, data) {
    if (err != null) {
      console.error(err);
    } else {
      currentPoints = data.points.total;
      pointsDisplay.innerText = 'Total Score: ' + currentPoints;
    }
  });
}

SetCurrentPoints();