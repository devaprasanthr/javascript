function computerPlay() {
  const moves = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function play(playerMove) {
  const computerMove = computerPlay();

  let resultText;

  if (playerMove === computerMove) {
      resultText = "It's a tie!";
  } else if (
      (playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'paper' && computerMove === 'rock') ||
      (playerMove === 'scissors' && computerMove === 'paper')
  ) {
      resultText = `You win! ${playerMove} beats ${computerMove}.`;
  } else {
      resultText = `You lose! ${computerMove} beats ${playerMove}.`;
  }

  document.getElementById('result').textContent = resultText;
}









function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}