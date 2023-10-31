let secretNumber;
let attempts = 0;

function Generate() {
    let secretNumber = "";
    while (secretNumber.length < 4) {
        const aleatoryDigit = Math.floor(Math.random() * 10).toString();
        if (!secretNumber.includes(aleatoryDigit)) {
            secretNumber += aleatoryDigit;
        }
    }
    return secretNumber;
}

function makeGuess() {
    
    const guess = document.getElementById("guessInput").value;
    
    if (guess.length !== 4 || !/^\d{4}$/.test(guess)) {
        document.getElementById("message").textContent = "Invalid guess. Make a new guess";
    } else {
        const [bulls, cows] = rate(guess, secretNumber);
        attempts++;

        if (bulls === 4) {
            document.getElementById("message").textContent = "Congrulation! Você acertou o número em " + attempts + " attempts. To play again reload the page";
            document.getElementById("guessInput").setAttribute("disabled", "true");
            document.getElementById("guessButton").setAttribute("disabled", "true");
        } else {
            document.getElementById("message").textContent = "Bulls: " + bulls + " Cows: " + cows;
        }

        guessInput.value = "";
    }
}

function rate(guess, secretNumber) {
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretNumber[i]) {
            bulls++;
        } else if (secretNumber.includes(guess[i])) {
            cows++;
        }
    }
    return [bulls, cows];
}

function playBAC() {
    secretNumber = Generate();
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").removeAttribute("disabled");
    document.getElementById("guessButton").removeAttribute("disabled");
    document.getElementById("guessInput").value = "";
}

document.getElementById("guessForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    makeGuess();
});

window.addEventListener("load", playBAC);
