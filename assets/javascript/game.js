

    var compNumber;
    var jewelNumbers;
    var wins= "";
    var losses="";

// make the ID "goal" produce a random number between 19 and 100 or whatever//
compNumber=Math.floor((Math.random() * 100) + 19);
console.log(compNumber);
$("#goal").html("Get to this number:" +" "+ compNumber);



//make each individual crystal get a random number betwween 1 and 12 when CLICKED on//
    var crystalRandomNumber= Math.floor((Math.random() * 12) + 1);
    console.log(crystalRandomNumber);

    var crystals= $(".crystals");
        crystals.attr({
            "data-random": crystalRandomNumber
        });


$(".crystals").on("click", function (){
console.log($(this).attr("data-random"));

});
    


//update the "total score" each time a jewel is clicked//


//if the total score === goal score, then say "you win" and add++ to the wins column//


//if the total score != goal score, then say "you lose" and add-- to the loss column//


//when === or != happens, restart the game.//



