const reels = document.querySelectorAll("#reels span");
const fundsDisplay = document.querySelector("#funds-display > span");
const minButton = document.querySelector("#min-button");
const maxButton = document.querySelector("#max-button");

let currentFunds = 100;
fundsDisplay.innerText = currentFunds;

function playGame(bet) {
    if (bet > currentFunds) {
        alert("Insufficient Funds!");
        return;
    }

    const reel1 = reelSpin();
    const reel2 = reelSpin();
    const reel3 = reelSpin();

    let symbolValue = -1;

    if (reel1 == reel2 && reel2 == reel3) {
        bet *= 10;
        symbolValue = reel1;
    }

    const winnings = bet * symbolValue;

    currentFunds += winnings;
    fundsDisplay.innerText = currentFunds;


    reels[0].innerText = convertToSymbol(reel1);
    reels[1].innerText = convertToSymbol(reel2);
    reels[2].innerText = convertToSymbol(reel3);
}

function reelSpin() {
    return Math.floor(Math.random()*5) + 1;
}

function convertToSymbol(num) {
    let symbol = "";

    if (num == 1) {
        symbol = "🍒";
    }
    else if (num == 2) {
        symbol = "🍋";
    }
    else if (num == 3) {
        symbol = "🍊";
    }
    else if (num == 4) {
        symbol = "🍈";
    }
    else if (num == 5) {
        symbol = "🥭";
    }
    return symbol;
}

minButton.addEventListener("click", () => playGame(1));
maxButton.addEventListener("click", () => playGame(5));