'use strict';
setTimeout(function () {

    let review = prompt('Would you like to do a review about me?').toLowerCase();

    if (review === 'yes') {
        alert('Great, time for a review!');

        let question1 = prompt('Did I Attend L&N Stem Academy?').toLowerCase();

        if (question1 === 'yes') {
            alert('Great! I did attened L&N Stem Academy');
            console.log('Correct')
        }
        else {
            alert('Sorry I did not attende that school')
            console.log('Incorrect')
        }

        let question2 = prompt('Did I gardaute in 2014?').toLowerCase();

        if (question2 === 'yes') {
            alert('You are Correct');
            console.log('Correct')
        }
        else {
            alert('Incorrect, I did Graduate in 2014!')
            console.log('Incorrect')
        }
        let question3 = prompt('Do I love Brewery?').toLowerCase();

        if (question3 === 'yes') {
            alert('Like any Salior Should!');
            console.log('Sailor Life')
        }

        else {
            alert('Wow, how dare ypu!')
            console.log('Well thats not nice')
        }

        let question4 = prompt('Is golf life?').toLowerCase();

        if (question4 === 'yes') {
            alert('Lefties for the WIN, Phill + Bubba all the way!');
            console.log('Phil is the best!')
        }
        else {
            alert('Buuba Bombs')
            console.log('Bubba Green Jacket')
        }
        let question5 = prompt('Do I love Snowboarding?').toLowerCase();

        if (question4 === 'yes') {
            alert('Favorite Snowboard area is in Utah at Pow Mow!');
            console.log('Greatest Snow on Earth')
        }
        else {
            alert('Woody\'s world')
            console.log('Powder Life')
        }

        let userName = prompt('Enter your name please');
        console.log(userName);
        userName.toLowerCase();
        alert('Congratlations' + userName);


    } else {
        alert('Ugh oh, you broke the toy!');
    }

},);
