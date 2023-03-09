'use strict';
// setTimeout(
function quiz() {

  let review = prompt('Would you like to do a review about me?').toLowerCase();

  if (review === 'yes') {
    alert('Great, time for a review!');

    let question1 = prompt('Did I Attend L&N Stem Academy?').toLowerCase();

    if (question1 === 'yes') {
      alert('Great! I did attened L&N Stem Academy');
      console.log('Correct');
    }
    else {
      alert('Sorry I did not attende that school');
      console.log('Incorrect');
    }

    let question2 = prompt('Did I gardaute in 2014?').toLowerCase();

    if (question2 === 'yes') {
      alert('You are Correct');
      console.log('Correct');
    }
    else {
      alert('Incorrect, I did Graduate in 2014!');
      console.log('Incorrect');
    }
    let question3 = prompt('Do I love Brewery?').toLowerCase();

    if (question3 === 'yes') {
      alert('Like any Salior Should!');
      console.log('Sailor Life');
    }

    else {
      alert('Wow, how dare ypu!');
      console.log('Well thats not nice');
    }

    let question4 = prompt('Is golf life?').toLowerCase();

    if (question4 === 'yes') {
      alert('Lefties for the WIN, Phill + Bubba all the way!');
      console.log('Phil is the best!');
    }
    else {
      alert('Buuba Bombs');
      console.log('Bubba Green Jacket');
    }
    let question5 = prompt('Do I love Snowboarding?').toLowerCase();

    if (question4 === 'yes') {
      alert('Favorite Snowboard area is in Utah at Pow Mow!');
      console.log('Utah is the Greatest Snow on Earth');
    }
    else {
      alert('Woody\'s world');
      console.log('Powder Life');
    }

    for (let i = 0; i < 4; i++) {

      let numbergame = prompt("Guess the best number between 1-10 (hint what number is afraid of the 7)");

      if (numbergame === '6') {
        alert('Correct, 6 because 7 ATE 9');
        console.log('Riddle Me This');
        // break
      }
      else {
        let numbergame2 = prompt('What ate 9?');
        console.log('The Riddler');

        let numbergame3 = prompt('How many rings does Michael Jordan have?');
        console.log('He is the G.O.A.T');

        let numbergame4 = prompt('How many rings did Scottie Pippen win with the Bulls');
        console.log('How many teams did Scottie Pippen play for in his profesional basketball carrer?');

        let numbergame5 = prompt('How many Green Jackest did Jack Nicklaus win?');
        console.log('I recomend you guess 6');
      }
      let answer = ["pepper jack", "cheddar", "colby jack"];
      let numberofguess = 6;
      let correctanswer = false;
      console.log('****');
      q6: while (numberofguess > 0) {
        let question = prompt('Favorite Cheeses?').toLowerCase();
        for (let i = 0; i < answer.length; i++) {

          console.log(question);
          if (question === answer[i]) {
            alert('correct');
            console.log('correct');
            correctanswer = true;
            break q6;
          }
        }
        numberofguess--;
      }
      if (correctanswer === false) {
        alert('incorrect');
        numberofguess--;
      } else {
        break;

        let userName = prompt('Enter your name please');
        console.log(userName);
        userName.toLowerCase();
        alert('Congratlations' + userName);


      }
    }
  } else {
    alert('Ugh oh, you broke the toy!');
  }

}
quiz();
