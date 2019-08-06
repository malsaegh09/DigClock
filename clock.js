"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function(h, m, s, a) {
    
$("hours").innerHTML = h;

$("minutes").innerHTML = m;

$("seconds").innerHTML = s;

$("ampm").innerHTML = a;

};

var padSingleDigit = function(num) {
	return (num < 10) ? "0" + num : num;
};

window.onload = function () {
setInterval(() => {

var d = new Date;
var hours = d.getHours();
var minutes = padSingleDigit(d.getMinutes());
var seconds = padSingleDigit(d.getSeconds());
var ampm = hours >= 12 ? 'PM' : 'AM';

hours = padSingleDigit(hours % 12);

displayCurrentTime(hours, minutes, seconds, ampm);

}, 1000);

};
