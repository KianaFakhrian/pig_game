'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let activePlayer = 0;
let currentScore = 0;
let score = [0, 0];
let end = false;

diceEl.classList.add('hidden');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

rollBtn.addEventListener('click', function () {
  if (!end) {
    let diceNumber = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;
    if (diceNumber === 1) {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      score[activePlayer] = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;

      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    } else {
      currentScore += diceNumber;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});
holdBtn.addEventListener('click', function () {
  if (!end) {
    score[activePlayer] += currentScore;
    if (score[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      end = true;
      diceEl.classList.add('hidden');
    }
    activePlayer === 0
      ? (score0.textContent = score[activePlayer])
      : (score1.textContent = score[activePlayer]);
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
// newBtn.addEventListener('click', function () {
//   activePlayer = 0;
//   currentScore = 0;
//   if (!player0El.contains('player--active')) {
//     player0El.classList.add('player--active');
//   }
//   score[0] = 0;
//   score[1] = 0;
//   score0.textContent = 0;
//   score1.textContent = 0;
//   document.querySelector('#current--0').textContent = 0;
//   document.querySelector('#current--1').textContent = 0;
// });
