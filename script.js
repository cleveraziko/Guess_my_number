'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess);

//     if (!guess) {
//         document.querySelector('.message').textContent = '⛔No number';
//     }
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

const displayMassage = function(massage) {
    document.querySelector('.message').textContent = massage;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        // document.querySelector('.message').textContent = '⛔No number !!!';
        displayMassage('⛔No number');
    } else if (guess === secretNumber) {
        displayMassage('🎉Correct Number Motherfucker !!!');
        // document.querySelector('.message').textContent =
        //     '🎉Correct Number Motherfucker !!!';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '40rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            // guess > secretNumber ? '📈Too high' : `📉Too low`;
            displayMassage(guess > secretNumber ? '📈Too high' : `📉Too low`);
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent =
            // 'You lost the fuckin game motherfucker !!!';
            displayMassage('You lost the fuckin game motherfucker !!!');
            document.querySelector('.score').textContent = 0;
        }
    }
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent =
    //             'You lost the fuckin game motherfucker !!!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } else if (guess < secretNumber) {
    //     document.querySelector('.message').textContent = `📉Too low`;
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMassage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

