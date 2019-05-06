    var compNumber;
    var jewelNumbers;
    var wins= 0;
    var losses= 0;
    var jewel1;
    var jewel2;
    var jewel3;
    var jewel4;
    var score= 0;

    $( document ).ready(function() { //"now start loading javasctipt and JQ"//
        console.log( "ready!" );

var returnToZero=function(){  //function that returns user score back to 0 //
    $("#total-score").text("Your total score is back to: 0");
    score=0;
}

var showJewelScore= function(){    //update the "total score" each time a jewel is clicked//
    $("#total-score").text("Your total score: " + score);
}

var returnRandomNumber= function(){    //make a random number between 1 and 12 function//
    return Math.floor((Math.random() * 12) + 1); 
}

var incrementLosses= function(){  //increment or add 1 to the losses when you lose//
    losses+=1;
    $(".Losses")[0].innerHTML = ("Losses: " + "" +losses) //change the text //
}
var incrementWins= function(){   //same for the wins//
    wins+=1;
    $(".Wins")[0].innerHTML = ("Wins: " + "" +wins); //change the text //
}
var checkScore= function(){
    if(score > compNumber){  //if the added number is larger than the goal number, you lose/win//
        alert("You Lose"); 
        incrementLosses();  //call the function from losses// 
        resetStartGame();
        returnToZero();
    } else {
        if(score===compNumber){
            alert("You win!");
           incrementWins();   // or you win and add that to the score board//
           resetStartGame();
           returnToZero();
        }
    }
}
 
var resetStartGame = function (){    //function to start the game  //

        // make the ID "goal" produce a random number between 19 and 100 or whatever **THIS IS WORKING**//
        compNumber=Math.floor((Math.random() * 100) + 19);
        console.log(compNumber);
        $("#goal").html("Get to this number:" +" "+ compNumber);

        //call the function for individual crystals to get a random number betwween 1 and 12//    
            jewel1=returnRandomNumber();
            jewel2=returnRandomNumber();
            jewel3=returnRandomNumber();
            jewel4=returnRandomNumber();
            console.log(jewel1, jewel2, jewel3, jewel4);
}
   resetStartGame(); // calling out the function of starting the game...HERE.... //

   //making the crystals clickable, like buttons, and assigning them to have a value, then adding that score//
    $("#jewelry1").on("click", function(){
        score= score + jewel1;
        console.log(score);
        showJewelScore();  
        checkScore();
    })
    $("#jewelry2").on("click", function(){
        score= score + jewel2;
        console.log(score);
        showJewelScore();
        checkScore();
    })
    $("#jewelry3").on("click", function(){
        score= score + jewel3;
        console.log(score);
        showJewelScore();
        checkScore();
    })
    $("#jewelry4").on("click", function(){
        score= score + jewel4;
        console.log(score);
        showJewelScore();
        checkScore();
        
    })

});

