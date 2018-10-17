

var listOfWords = ["bootcamp", "coding", "language", "developer"];

var word = listOfWords[Math.floor(Math.random() * listOfWords.length)];

var blank = document.getElementById("hidden");

var tries = document.getElementById("tries");

var remaining = 10;

var hiddenLetter = [];
for (i = 0; i < word.length; i++) {
    hiddenLetter[i] = "_";
    blank.textContent = hiddenLetter;
}

console.log(listOfWords);
document.onkeyup = function (event) {
    var letter = event.key;
    for (j = 0; j < word.length; j++) {
        if (word[j] == letter) {
            hiddenLetter[j] = letter;
            blank.textContent = hiddenLetter;
        }
    }
    if (word.indexOf(letter) < 0) {
        remaining--;
    }
    if(remaining === 0) {
        remaining = "You Lose!";
    }
    tries.textContent = remaining;
}




