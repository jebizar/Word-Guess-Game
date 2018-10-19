var blank = document.getElementById("hidden");

var tries = document.getElementById("tries");

var guess = document.getElementById("guessed");

var wins = document.getElementById("winCount");

var losses = document.getElementById("lossCount");

count = {
    winC: 0,
    lossC: 0
}

wins.textContent = "Wins: " + count.winC;
losses.textContent = "Losses: " + count.lossC;

function newGame() {
    var listOfWords = ["bootcamp", "coding", "language", "developer", "hypertext", "javascript", "cascade"];

    var hiddenLetter = [];

    var word = listOfWords[Math.floor(Math.random() * listOfWords.length)];

    for (var i = 0; i < word.length; i++) {
        hiddenLetter[i] = "_";
        blank.textContent = hiddenLetter.join(" ");
    }

    let remaining = 10;
    let guessedLetters = [];
    guess.textContent = guessedLetters;
    tries.textContent = "Tries Remaining: " + remaining;


    document.onkeyup = function (event) {
        var letter = event.key;

        for (var i = 0; i < word.length; i++) {
            if (word[i] == letter) {
                hiddenLetter[i] = letter;
                blank.textContent = hiddenLetter.join(" ");
            }
        }
        if (word.indexOf(letter) < 0 && guessedLetters.indexOf(letter) < 0) {
            remaining--;
        }
        if (remaining === 0) {
            remaining = "You Lose!";
            count.lossC++;
        }
        if (hiddenLetter.indexOf("_") === -1) {
            remaining = "You Win!";
            count.winC++;
        }
        if (guessedLetters.indexOf(event.key) === -1) {
            guessedLetters.push(event.key);
        }
        guess.textContent = guessedLetters;
        tries.textContent = "Tries Remaining: " + remaining;
        wins.textContent = "Wins: " + count.winC;
        losses.textContent = "Losses: " + count.lossC;
    }

}
newGame();


document.getElementById("newGame").onclick = function () { newGame() };