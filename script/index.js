var resultText = document.querySelector(".container h1")
var button = document.querySelector(".btn")

button.addEventListener('click', function () {

    var randomNumber1 = Math.ceil(Math.random() * 6)
    var randomNumber2 = Math.ceil(Math.random() * 6)

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

    if (randomNumber1 == randomNumber2) {

        resultText.textContent = "Draw!"

    } else if (randomNumber1 > randomNumber2) {

        resultText.textContent = "Player 1 win!"

    } else {

        resultText.textContent = "Player 2 win!"
    }

});