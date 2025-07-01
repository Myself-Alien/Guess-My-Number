let secretNumber = Math.floor(Math.random() * 10) + 1;
function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    if (!guess || guess < 1 || guess > 10) {
        message.textContent =
            "Please enter a valid number between 1 and 10.";
        return;
    }
    if (guess > secretNumber) {
        message.textContent = "Too high! Try again.";
        flashColor("red");
    } else if (guess < secretNumber) {
        message.textContent = "Too low! Try again.";
        flashColor("red");
    } else {
        message.textContent = "Correct! You guessed it!";
        document.body.style.backgroundColor = "green";
        document.getElementById("guessInput").disabled = true;
    }
    document.getElementById("guessInput").value = "";
}

function flashColor(color) {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 3000);
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.body.style.backgroundColor = "";
}