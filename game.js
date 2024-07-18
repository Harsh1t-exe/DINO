const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");
const maxScoreDisplay = document.getElementById("maxScore");

let score = 0;
let maxScore = 0;
let scoreInterval;

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    gameOver();
  }
}, 10);

function startScoreInterval() {
  scoreInterval = setInterval(() => {
    score++;
    scoreDisplay.innerText = `Score: ${score}`;
  }, 1000); // Increase score every second
}

function stopScoreInterval() {
  clearInterval(scoreInterval);
}

function gameOver() {
  alert(`Game Over! Your Score: ${score}`);
  if (score > maxScore) {
    maxScore = score;
    maxScoreDisplay.innerText = `Max Score: ${maxScore}`;
  }
  score = 0;
  scoreDisplay.innerText = `Score: ${score}`;
  stopScoreInterval();
}

document.addEventListener("keydown", function (event) {
  jump();
  if (!scoreInterval) {
    startScoreInterval();
  }
});

// Start score interval on page load
startScoreInterval();
