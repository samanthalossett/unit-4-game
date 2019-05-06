    var compNumber;
    var jewelNumbers;
    var wins= 0;
    var losses= 0;
    var jewel1;
    var jewel2;
    var jewel3;
    var jewel4;
    var score= 0;

    $( document ).ready(function() {
        console.log( "ready!" );

var showJewelScore= function(){
    $("#total-score").text("Your total score: " + score);
}

var returnRandomNumber= function(){
    return Math.floor((Math.random() * 12) + 1); 
}

var incrementLosses= function(){
    losses+=1;
    $(".Losses")[0].innerHTML = ("Losses: " + "" +losses)
}
var incrementWins= function(){
    wins+=1;
    $(".Wins")[0].innerHTML = ("Wins: " + "" +wins);
}
var checkScore= function(){
    if(score > compNumber){  //if the added number is larger than the goal number, you lose //
        alert("You Lose");
        incrementLosses();
      
    } else {
        if(score===compNumber){
            alert("You win!");
           incrementWins();//
        }
    }
}
//start game here//
var resetStartGame = function (){

        // make the ID "goal" produce a random number between 19 and 100 or whatever **THIS IS WORKING**//
        compNumber=Math.floor((Math.random() * 100) + 19);
        console.log(compNumber);
        $("#goal").html("Get to this number:" +" "+ compNumber);

        //make each individual crystal get a random number betwween 1 and 12 when CLICKED on     
            jewel1=returnRandomNumber();
            jewel2=returnRandomNumber();
            jewel3=returnRandomNumber();
            jewel4=returnRandomNumber();
            console.log(jewel1, jewel2, jewel3, jewel4);
}
   resetStartGame(); // calling out the function of starting the game //

    $("#jewelry1").on("click", function(){//making the crystals clickable, like buttons but not//
        score= score + jewel1;
        console.log(score);
        showJewelScore();
        checkScore();
    })
    $("#jewelry2").on("click", function(){//making the crystals clickable, like buttons but not//
        score= score + jewel2;
        console.log(score);
        showJewelScore();
        checkScore();
    })
    $("#jewelry3").on("click", function(){//making the crystals clickable, like buttons but not//
        score= score + jewel3;
        console.log(score);
        showJewelScore();
        checkScore();
    })
    $("#jewelry4").on("click", function(){//making the crystals clickable, like buttons but not//
        score= score + jewel4;
        console.log(score);
        showJewelScore();
        checkScore();
    })
//update the "total score" each time a jewel is clicked//
//when === or != happens, restart the game.//

});

