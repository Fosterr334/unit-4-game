// Global Variables
var goal = Math.floor(Math.random() * (152-21)+21);
var userScore = 0;
var wins = 0;
var losses = 0;
var redGem = Math.floor(Math.random() * (6-2)+2);
var grnGem = Math.floor(Math.random() * (12-6)+6);
var orgGem = Math.floor(Math.random() * (16-12)+12);
var prpGem = Math.floor(Math.random() * (12-1)+1);
var whtGem = Math.floor(Math.random() * (4-2)+2);
var winpause = false;

function freeze(){
    redGem = 0;
    grnGem = 0;
    orgGem = 0;
    prpGem = 0;
    whtGem = 1;
};

function scoreChecker(){
    if (userScore === goal){
        alert("You win!");
        freeze();
            if(winpause === false){
                wins++;
                $("#winTotal").text(wins);
                winpause = true;
            }
    }
    else if(userScore > goal){
        alert("You Lose!")
        freeze();
        if(winpause === false){
            losses++;
            $("#loseTotal").text(losses);
            winpause = true;
        }
    }
}

function restartGame(){
    goal = Math.floor(Math.random() * (152-21)+21);
    userScore = 0;
    redGem = Math.floor(Math.random() * (6-1)+1);
    grnGem = Math.floor(Math.random() * (12-6)+6);
    orgGem = Math.floor(Math.random() * (16-12)+12);
    prpGem = Math.floor(Math.random() * (12-1)+1);
    whtGem = Math.floor(Math.random() * (4-2)+2);
    winpause = false;
    $("#userNum").text(userScore);
    $("#goalNum").text(goal);
}

$(document).ready(function () {
    //Goal Point
    $("#goalNum").text(goal);
    //Red Gem
    $("#redGem").on("click", function () {
        console.log(userScore);
        userScore = userScore + redGem;
        $("#userNum").text(userScore);
        scoreChecker();
    });
    //Green Gem
    $("#greenGem").on("click", function () {
        console.log(userScore);
        userScore = userScore + grnGem;
        $("#userNum").text(userScore);
        scoreChecker();
    });
    //Orange Gem
    $("#orangeGem").on("click", function () {
        console.log(userScore);
        userScore = userScore + orgGem;
        $("#userNum").text(userScore);
        scoreChecker();
    });
    //Purple Gem
    $("#purpleGem").on("click", function () {
        console.log(userScore);
        userScore = userScore - prpGem;
        $("#userNum").text(userScore);
        scoreChecker();
    });
    //White Gem
    $("#whiteGem").on("click", function () {
        console.log(userScore);
        userScore = userScore * whtGem;
        $("#userNum").text(userScore);
        scoreChecker();
    });
    //Restart Game
    $("#restartBtn").on("click", function () {
        restartGame();
    });
});