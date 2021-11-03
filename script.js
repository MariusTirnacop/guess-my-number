'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let totalScore = 0;

const check = document.querySelector('.check');
let message = document.querySelector('.message');
let scoreNum = document.querySelector('.score');

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    message.textContent = 'No number!';
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '400px';
    message.textContent = 'Correct number.🎉';
    document.querySelector('.number').textContent = secretNumber;

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Guess is too high';
      score--;
      scoreNum.textContent = score;
    } else {
      message.textContent = 'You lost the game 😔';
      scoreNum.textContent = 0;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Guess is too low';
      score--;
      scoreNum.textContent = score;
    } else {
      message.textContent = 'You lost the game 😔';
      scoreNum.textContent = 0;
    }
  }
});

//Play Again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  scoreNum.textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
