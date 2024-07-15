let numbers = [];

function getRandomNumber() {
    let num = Math.floor(Math.random() * 12) + 1;
    if (num > 10) {
        num = 10;
    } else if (num === 1) {
        num = 11;
    }
    return num;
}

let messages = "";

numbers[0] = getRandomNumber();
numbers[1] = getRandomNumber();

function renderGame() {
    let sum = 0;
    console.log("renderGame called");
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    if (sum > 21) {
        document.getElementById("cardPick").innerText = "Try Again!";
        messages = "Sorry, you are out of the game!";
        document.getElementById("cardPick").onclick = tryAgain;
    } else if (sum === 21) {
        messages = "Congratulations, you have won a BlackJack!";
        document.getElementById("cardPick").innerText = "Start Again";
        document.getElementById("cardPick").onclick = startAgain;
    } else {
        messages = "Would you like to pick another card?";
        document.getElementById("cardPick").innerText = "Pick Card"; 
        document.getElementById("cardPick").onclick = cardPick; 
    }
    document.getElementById("textChange").innerText = messages;
    document.getElementById("cards").innerText = numbers.join(", ");
    document.getElementById("sum").innerText = sum;
}

function cardPick() {
    numbers.push(getRandomNumber());
    renderGame();
}

function tryAgain() {
    numbers = [];
    numbers[0] = getRandomNumber();
    numbers[1] = getRandomNumber();
    renderGame(); 
}

function startAgain(){  
    numbers = [];
    numbers[0] = getRandomNumber();
    numbers[1] = getRandomNumber();
    renderGame();    
}

// document.addEventListener("DOMContentLoaded", function() {
//     renderGame();
// });
