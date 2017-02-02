
function Convert()
{

//var tempSelect = document.getElementById("convertSelect").value;
var Far = document.getElementById("inputTemp").value;

var Cel = ((Far - 32) * 5) / 9;

if (Far > 60){

document.getElementById("convertResult").innerHTML = "The Current Temperature in Celsius is: " + Cel + " It's HOT out!";
document.getElementById("dogTemp").innerHTML = "<img class='dogPic' src='hotdog.jpg'>"
} else {

document.getElementById("convertResult").innerHTML = "The Current Temperature in Celsius is: " + Cel + " It's COOOOLD outside!!";
document.getElementById("dogTemp").innerHTML = "<img class='dogPic' src='colddog.jpg'>"

  }
}
