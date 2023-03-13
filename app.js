'use strict';
quiz();

function quiz() {

  let score = 0;

  let review = prompt('Would you like to do a review about me?').toLowerCase();
  if (review === 'yes') {
    alert('Great, time for a review!');
  } else {
    alert('Ugh oh, you broke the toy!');
  }
  let question1 = prompt('Did I Attend L&N Stem Academy?\nYes or No').toLowerCase();
  if (question1 === 'yes') {
    alert('Great! I did attended L&N Stem Academy');
    score++;
  } else {
    alert('Sorry I did not attended that school');
  }

  let question2 = prompt('Did I gardaute in 2014?\nYes or No').toLowerCase();

  if (question2 === 'yes') {
    alert('You are Correct');
  }
  else {
    alert('Incorrect, I did Graduate in 2014!');
  }
  let question3 = prompt('Do I love Brewery?\nYes or No').toLowerCase();

  if (question3 === 'yes') {
    alert('Like any Salior Should!');
  }

  else {
    alert('Wow, how dare ypu!');
  }

  let question4 = prompt('Is golf life?\nYes or No').toLowerCase();

  if (question4 === 'yes') {
    alert('Lefties for the WIN, Phill + Bubba all the way!');
  }
  else {
    alert('Buuba Bombs');
  }
  let question5 = prompt('Do I love Snowboarding?\nYes or No').toLowerCase();

  if (question4 === 'yes') {
    alert('Favorite Snowboard area is in Utah at Pow Mow!');
  }
  else {
    alert('Woody\'s world');
  }

  for (let i = 0; i < 4; i++) {
    let numbergame = prompt('Guess the best number between 1-10 (hint what number is afraid of the 7)');

    if (numbergame === '6') {
      alert('Correct, 6 because 7 ATE 9');
      score++;
      i = 4;
    } else {
      numbergame = prompt('What ate 9?');
      if (numbergame === '6') {
        score++;
        i = 4;
      } else {
        numbergame = prompt('How many rings does Michael Jordan have?');
        if (numbergame === '6') {
          score++;
          i = 4;
        } else {
          numbergame = prompt('How many rings did Scottie Pippen win with the Bulls');
          if (numbergame === '6') {
            score++;
            i = 4;
          } else {
            alert('sorry, thats not right');
            break;
          }
        }
      }
    }
  }
  let answer = ['pepper jack', 'cheddar', 'colby jack'];
  let numberOfGuess = 6;


  while (numberOfGuess > 0) {
    let question = prompt('Favorite Cheeses?').toLowerCase();
    for (let i = 0; i < answer.length; i++) {
      if (question === answer[i]) {
        alert('correct');
        numberOfGuess = 1;
        score++;
      }
    }
    numberOfGuess--;
    if (numberOfGuess === 0) {
      alert('incorrect');
    }
  }
  let userName = prompt('Enter your name please');

  alert(`Congratulations ${userName}. You got ${score}/7 question right.`);
}
quiz();
