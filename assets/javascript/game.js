var targetNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
var blueCrystal= 0;
var greenCrystal= 0;
var redCrystal= 0;
var yellowCrystal= 0;

$("#randomNumber").text(targetNumber);
var counter = 0;

var numberOptions = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;

for(var i = 0; i < numberOptions.length; i++) {
var crystalImage = blueCrystal, greenCrystal, redCrystal, yellowCrystal;
crystalImage.attr("data-crystalvalue", numberOptions[i]);
 $("#crystal").append(crystalImage);
};

$(".crystal").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    if(counter +- crystalValue){
        $("#score").text(counter);
    }

});
