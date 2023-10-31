function Generete(){
    let secretNumber ="";
    while(secretNumber.length<4){
        const aleatoryDigit = Math.floor(Math.random()*10).toString();
        if(!secretNumber.includes(aleatoryDigit)){
            secretNumber += aleatoryDigit;
        } 
    }
    return secretNumber;
}
function makeGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = guessInput.value;
    
    if (guess.length !== 4 || !/^\d{4}$/.test(guess)) {
        document.getElementById("message").textContent = "Invalid guess. Make a new guess";
        return;
    }

    const [bulls, cows] = rate(guess, secretNumber);
    tentativas++;

    if (bulls === 4) {
        document.getElementById("message").textContent = "Congrulations! You got it right " + tries + " attempts.";
        document.getElementById("guessInput").setAttribute("disabled", "true");
        document.getElementById("guessButton").setAttribute("disabled", "true");
    } else {
        document.getElementById("message").textContent = "Bulls: " + bulls + " Cows: " + cows;
    }
}

function rate(guess,secretNumber){
    let bulls = 0;
    let cows = 0;
    for( let i = 0; i < 4 ;i++){
        if(guess[i] === secretNumber[i]){
            bulls++;
        }else if(secretNumber.includes(guess[i])){
            cows++;
        }
    }
    return [bulls, cows];
}

function playBAC(){
    const secretNum = Generete();
    let attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").removeAttribute("disabled");
    document.getElementById("guessButton").removeAttribute("disabled");
    document.getElementById("guessInput").value = "";
}
document.getElementById("guessButton").addEventListener("click", makeGuess);
window.onload = iniciarJogo;