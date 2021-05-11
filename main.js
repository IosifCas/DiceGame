'use strict';

function displayWinner(player) {
    var winner = document.querySelector("h1");
    if (player === 0) winner.textContent = "Draw!";
    else if (player === 1) winner.textContent = "🚩Player 1 wins!";
    else winner.textContent = "Player 2 wins!🚩";
}

function whoWins(player1, player2) {
    if (player1 === player2) {
        return 0;
    } else if (player1 > player2) {
        return 1;
    } else return 2;
}

function randomNumber1() {
    return Math.floor(Math.random() * 6) + 1;
}

function addImages(player) {
    var diceImg = document.querySelectorAll("img");
    var value = randomNumber1();
    switch (value) {
        case 1:
            diceImg[player].setAttribute("src", "./images/dice1.png");
            break;
        case 2:
            diceImg[player].setAttribute("src", "./images/dice2.png");
            break;
        case 3:
            diceImg[player].setAttribute("src", "./images/dice3.png");
            break;
        case 4:
            diceImg[player].setAttribute("src", "./images/dice4.png");
            break;
        case 5:
            diceImg[player].setAttribute("src", "./images/dice5.png");
            break;
        case 6:
            diceImg[player].setAttribute("src", "./images/dice6.png");
            break;
        default:
            console.log("Sorry, something went wrong.");
            break;
    }
    return value;
}

function main() {
    var player1 = addImages(0);
    // console.log(player1);
    var player2 = addImages(1);
    // console.log(player2);
    var winner = whoWins(player1, player2);
    // console.log(winner);
    displayWinner(winner);
}

main();