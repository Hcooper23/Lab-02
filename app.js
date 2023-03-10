'use strict';
// setTimeout(
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
    console.log('Correct');
    score++;
  } else {
    alert('Sorry I did not attended that school');
    console.log('Incorrect');
    //qA1 = 0;
  }

  let question2 = prompt('Did I graduate in 2014?\n Yes Or No').toLowerCase();
  if (question2 === 'yes') {
    alert('You are Correct');
    console.log('Correct');
    score++;
  } else {
    alert('Incorrect, I did Graduate in 2014!');
    console.log('Incorrect');
  }

  let question3 = prompt('Do I love Brewery?\n Yes or No').toLowerCase();
  if (question3 === 'yes') {
    alert('Like any Salior Should!');
    console.log('Sailor Life');
    score++;
  } else {
    alert('Wow, how dare ypu!');
    console.log('Well thats not nice');
  }

  let question4 = prompt('Is golf life?\n Yes or No').toLowerCase();
  if (question4 === 'yes') {
    alert('Lefties for the WIN, Phill + Bubba all the way!');
    console.log('Phil is the best!');
    score++;
  } else {
    alert('Buuba Bombs');
    console.log('Bubba Green Jacket');
  }

  let question5 = prompt('Do I love Snowboarding?\n Yes or No').toLowerCase();
  if (question5 === 'yes') {
    alert('Favorite Snowboard area is in Utah at Pow Mow!');
    console.log('Utah is the Greatest Snow on Earth');
    score++;
  } else {
    alert('Woody\'s world');
    console.log('Powder Life');
  }

  for (let i = 0; i < 4; i++) {
    let numbergame = prompt('Guess the best number between 1-10 (hint what number is afraid of the 7)');

    if (numbergame === '6') {
      alert('Correct, 6 because 7 ATE 9');
      console.log('Riddle Me This');
      score++;
      i = 4;
    } else {
      numbergame = prompt('What ate 9?');
      if (numbergame === '6') {
        console.log('The Riddler');
        score++;
        i = 4;
      } else {
        numbergame = prompt('How many rings does Michael Jordan have?');
        if (numbergame === '6') {
          console.log('He is the G.O.A.T');
          score++;
          i = 4;
        } else {
          numbergame = prompt('How many rings did Scottie Pippen win with the Bulls');
          if (numbergame === '6') {
            console.log('How many teams did Scottie Pippen play for in his professional basketball carrier?');
            score++;
            i = 4;
          } else {
            alert('sorry, thats not right');
            break;
          }
          // numbergame5 = prompt('How many Green Jackest did Jack Nicklaus win?');
          // console.log('I recommend you guess 6');
        }
      }
    }
  }
  let answer = ['pepper jack', 'cheddar', 'colby jack'];
  let numberOfGuess = 6;
  //let correctAnswer = false;

  console.log('****');
  while (numberOfGuess > 0) {
    let question = prompt('Favorite Cheeses?').toLowerCase();
    for (let i = 0; i < answer.length; i++) {
      console.log(question);
      if (question === answer[i]) {
        alert('correct');
        console.log('correct');
        numberOfGuess = 1;
        score++;
      }
    }
    numberOfGuess--;
    if (numberOfGuess === 0) {
      alert('incorrect');
    //   numberOfGuess--;
    // } else {
    }
  }
  console.log(score);
  let userName = prompt('Enter your name please');
  console.log(userName);
  // userName.toLowerCase();

  alert(`Congratulations ${userName}. You got ${score}/7 question right.`);
}
