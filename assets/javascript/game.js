$(document).ready(function(){
var score, goalNumber;
var wins = 0;
var losses = 0;

resetGame();

$('.gems').on("click", function(){
    score += parseInt($(this).val());
    $("#score").html(score);

    if(score == goalNumber){
        alert("You Win!");
        wins++;
        resetGame();
    }
    if(score > goalNumber){
        alert("You Lose! Haha");
        losses++;
        resetGame();
    }
});

if(score == goalNumber){
    alert("You Win!");
    wins++;
    resetGame();
}
if(score > goalNumber){
    alert("You Lose! Haha");
    losses++;
    resetGame();
}


function resetGame(){
    score = 0;
    goalNumber = Math.floor((Math.random() * 15) + 40);
    $("#RedGem").val(Math.floor((Math.random() * 7) + 3));
    $("#BlackGem").val(Math.floor((Math.random() * 7) + 3));
    $("#YellowGem").val(Math.floor((Math.random() * 7) + 3));
    $("#GreenGem").val(Math.floor((Math.random() * 7) + 3));
    $("#goal").html(goalNumber);
    $("#score").html(score);
    $("#wins").html(wins);
    $("#losses").html(losses);
}
});