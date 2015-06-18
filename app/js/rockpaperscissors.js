////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var output = null;
    if (move){
        output = move;
    } else {
        output = 'getInput()';
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return output;
}

function getComputerMove(move) {
    var output = null;
    if (move){
        output = move;
    } else {
        output = 'randomPlay()';
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return output;
}

function getWinner(playerMove,computerMove) {
    var winner;
    switch (playerMove) {
        case 'rock':
            switch (computerMove) {
                case 'rock':
                    winner = 'nobody';
                    break;
                case 'paper':
                    winner = 'computer';
                    break;
                case 'scissors':
                    winner = 'player';
                    break;
            }
            break;
        case 'paper':
            switch (computerMove) {
                case 'rock':
                    winner = 'player';
                    break;
                case 'paper':
                    winner = 'nobody';
                    break;
                case 'scissors':
                    winner = 'computer';
                    break;
            }
            break;
        case 'scissors':
            switch (computerMove) {
                case 'rock':
                    winner = 'computer';
                    break;
                case 'paper':
                    winner = 'player';
                    break;
                case 'scissors':
                    winner = 'nobody';
                    break;
            }
            break;
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '. ' + winner.charAt(0).toUpperCase() + winner.slice(1) + ' is the winner!');
    return winner;
}

function playToX(times) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var ties = 0
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    for (var i = 0; i < times; i++) {
        var winner = getWinner(getPlayerMove(getInput()), getComputerMove(randomPlay()));
        switch (winner) {
            case 'player':
                playerWins++;
                break;
            case 'computer':
                computerWins++;
                break;
            case 'nobody':
                ties++;
                break;
            default:
                console.log('Huh?');
        }
    }
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + ', with ' + ties + (ties > 1 || ties === 0 ? ' ties.' : ' tie.'));
    return [playerWins, computerWins];
}

