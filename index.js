let score1El = document.getElementById("score1-el")
let score2El = document.getElementById("score2-el")

let score1 = 0
let score2 = 0

function increment(scoreVar, scoreEl, points) {
    scoreVar += points
    scoreEl.textContent = scoreVar
    return scoreVar
}

function reset() {
    score1 = 0
    score2 = 0
    score1El.textContent = 0
    score2El.textContent = 0
}