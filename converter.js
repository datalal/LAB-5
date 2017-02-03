function Convert() {

    //var tempSelect = document.getElementById("convertSelect").value;
    var inputTemp1 = document.getElementById("inputTemp").value;

    var Cel = ((inputTemp1 - 32) * 5) / 9;
    var Far = ((inputTemp1 * 9) / 5) + 32;



    if(document.getElementById('convertSelect1').checked) {

      if (Cel > 16) {

          document.getElementById("convertResult").innerHTML = "The current temperature in Celsius is: " + Cel + " °C" + " It's HOT out!!";
          document.getElementById("dogTemp").innerHTML = "<img class='dogPic' src='hotdog.jpg'>"
      } else {

          document.getElementById("convertResult").innerHTML = "The current temperature in Celsius is: " + Cel + " °C" + " It's COOOOLD outside!!";
          document.getElementById("dogTemp").innerHTML = "<img class='dogPic' src='colddog.jpg'>"

      }


     } else if (document.getElementById('convertSelect2').checked) {

       if (Far > 60) {

           document.getElementById("convertResult").innerHTML = "The current temperature in Fahrenheit is: " + Far + " °F" + " It's HOT out!!";
           document.getElementById("dogTemp").innerHTML = "<img class='dogPic' src='hotdog.jpg'>"
       } else {

           document.getElementById("convertResult").innerHTML = "The current temperature in Fahrenheit is: " + Far + " °F" + " It's COOOOLD outside!!";
           document.getElementById("dogTemp").innerHTML = "<img class='dogPic' src='colddog.jpg'>"

       }



     }


}
