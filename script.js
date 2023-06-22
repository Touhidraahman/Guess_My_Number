'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

//Values
let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let Score = 20;
let HighScore = 0;
document.querySelector('.number').textContent = Secretnumber;
const DisplayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //No number and Correct Number
  if (!guess) {
    // document.querySelector('.message').textContent = '🤦‍♀️ No Number!';
    DisplayMsg('🤦‍♀️ No Number!');
  } else if (guess === Secretnumber) {
    // document.querySelector('.message').textContent = '✔ Correct Number!';
    DisplayMsg('✔ Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (Score > HighScore) {
      HighScore = Score;
      document.querySelector('.highscore').textContent = HighScore;
    }
    //When guess is Wrong
  } else if (guess !== Secretnumber) {
    if (Score > 1) {
      document.querySelector('.message').textContent =
        guess > Secretnumber ? '💋 Too High' : '💋 Too Low';
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      // document.querySelector('.message').textContent = '😫 You Lost The Game!';
      DisplayMsg('😫 You Lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //Too high Number
  // } else if (guess > Secretnumber) {
  //   if (Score > 1) {
  //     document.querySelector('.message').textContent = '💋 Too High';
  //     Score--;
  //     document.querySelector('.score').textContent = Score;
  //   } else {
  //     document.querySelector('.message').textContent = '😫 You Lost The Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //Too low Number
  // } else if (guess < Secretnumber) {
  //   if (Score > 1) {
  //     document.querySelector('.message').textContent = '💋 Too Low';
  //     Score--;
  //     document.querySelector('.score').textContent = Score;
  //   } else {
  //     document.querySelector('.message').textContent = '😫 You Lost The Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//Activating the Again Box
document.querySelector('.again').addEventListener('click', function () {
  Score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = Score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
