// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesleft = 3;
// UI elements
const game = document.querySelector("#game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");
//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess / click
guessBtn.addEventListener("click", function () {
    let guess = parseInt(guessInput.value);
    // validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter values between ${min} and ${max}`, "red")
    } else {
        if (guess === winningNum) {
            // disale input
            guessInput.disable = true;
            // change the border color
            guessInput.style.borderColor = "green"
            // set message
            setMessage(`${winningNum} is correct, You WON`, "green")
        } else {
            guessesleft -= 1;

            if (guessesleft === 0) {
                //disable input
                guessInput.disable = true;
                // change the border color
                guessInput.style.borderColor = "red";
                setMessage(`Game Over, You LOST, The winning number was ${winningNum}`, "red");
            } else {
                // change the border color
                guessInput.style.borderColor = "red";
                guessInput.value = "";
                setMessage(`${guess} is not correct, ${guessesleft} guesses left`, "red")
            }
        }
    }
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}




// parseFloat "1.34" = 1.34
// parseInt "1.34" = 1
