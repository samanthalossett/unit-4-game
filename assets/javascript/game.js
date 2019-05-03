    var compNumber;
    var jewelNumbers;
    var wins= "";
    var losses="";
    var previousNum= 0;
   

// make the ID "goal" produce a random number between 19 and 100 or whatever **THIS IS WORKING**//
compNumber=Math.floor((Math.random() * 100) + 19);
console.log(compNumber);
$("#goal").html("Get to this number:" +" "+ compNumber);


for (var i=0; i < 4; i++){
//make each individual crystal get a random number betwween 1 and 12 when CLICKED on ??click works but each rystal gets the same number???** *//
    var crystalRandomNumber= Math.floor((Math.random() * 12) + 1);
    console.log(crystalRandomNumber);

    var crystals= $(".crystals");
        crystals.attr({
            "data-random": crystalRandomNumber
        });
    }

$(".crystals").on("click", function (){

console.log($(this).attr("data-random"));

var num= parseInt ($(this).attr("data-random"));

previousNum += num;

if(previousNum > compNumber){
    console.log("You Lose")
}
else if(previousNum === compNumber) {
    console.log("You win!");
}
console.log(previousNum);

});
    


//update the "total score" each time a jewel is clicked//


//if the total score === goal score, then say "you win" and add++ to the wins column//


//if the total score != goal score, then say "you lose" and add-- to the loss column//


//when === or != happens, restart the game.//



