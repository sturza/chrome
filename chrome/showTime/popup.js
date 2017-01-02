//region - vars and functions

var timeId = "time";
var dateId = "date";
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var greeting = "doamnele ajuta!";

function setTimeAndDate(timeElement, dateElement) {
    var date = new Date();
    var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    
    var time = date.getHours() + ":" + minutes;
    var date = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
    
    timeElement.innerHTML = time;
    dateElement.innerHTML = date;
}

console.log(greeting);

document.addEventListener("DOMContentLoaded", function(dcle) {
    var timeElement = document.getElementById(timeId);
    var dateElement = document.getElementById(dateId);
    setTimeAndDate(timeElement, dateElement);
});
