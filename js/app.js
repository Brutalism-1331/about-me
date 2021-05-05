'use strict'
let totalCorrect = 0



let user = prompt('What is your name?').toUpperCase();
alert('Hello ' + user + ' welcome to my about me page!');

function question1(){
let q1 = prompt('Are you ready to play a Yes or No question game? Answer Y/N!').toUpperCase();

if (q1 === 'YES' || q1 === 'Y') {
  // console.log('q1:' + q1);
  alert('Great let\'s get started');
  totalCorrect ++;
}
else if (q1 === 'NO' || q1 === 'N') {
  alert('Please play along!')
}
else {
  alert('Don\'t give up yet')
}
}
question1();

function question2(){
let q2 = prompt('Was i born in Canada?').toUpperCase();
if (q2 === 'YES' || q2 === 'Y') {
  // console.log('q2:' + q2);
  alert('Incorrect, I was born in Australia!')
}
else if (q2 === 'NO' || q2 === 'N') {
  alert('Correct, However i\'m a Canadian citizen by birth right.');
  totalCorrect ++;
}
}
question2();

// let q3 = prompt('Did i complete highschool?').toUpperCase();
// if (q3 === 'YES' || q3 === 'Y') {
//   // console.log('q3:' + q3);
//   alert('Incorrect, I left at the end of grad-10 to start my plumbing apprenticeship at age-16.')
// }
// else if (q3 === 'NO' || q3 === 'N') {
//   alert('Correct, I left school to start my plumbing apprenticeship at age 16, True fact i had to ride 5km to work every morning.');
//   totalCorrect ++;
// }

// let q4 = prompt('Do i own a dog?').toUpperCase();
// if (q4 === 'YES' || q4 === 'Y') {
//   // console.log('q4:' + q4);
//   alert('Correct, I owen a 17 week old Husky puppy called Benzaiten!');
//   totalCorrect ++;
// }
// else if (q4 === 'NO' || q4 === 'N') {
//   alert('Incorrect, I owen a 17 week old Husky puppy named Benzaiten!')
// }

// let q5 = prompt('Do i know how many tattoos i have?').toUpperCase();
// if (q5 === 'YES' || q5 === 'Y') {
//   // console.log('q5:' + q5);
//   alert('Incorrect, All i know is i\'ve got 300+ hours of being tattooed and won\'t stop till i complete the vision i had at 13. ')
// }
// else if (q5 === 'NO' || q5 === 'N') {
//   alert('Correct, All i know is when i\'m finished i\'ll be 99% covered and have only one tattoo!!!  ');
//   totalCorrect ++;
// }

// let q6 = prompt('Is coding my dream career?').toUpperCase();
// if (q6 === 'YES' || q6 === 'Y') {
//   // console.log('q6:' + q6);
//   alert('Incorrect, i\'m learning to code because of a workplace accident, I plan on becoming a tattoo artist by the age of 40.')
// }
// else if (q6 === 'NO' || q6 === 'N') {
//   alert('Correct, I plan on becoming a tattoo artist by the time i\'m 40!');
//   totalCorrect ++;
// }

// alert('Congratulations ' + user + ' you just learned so many new things all about ME!!');

// let correctAnswer = 13
// let attempts = 4
// let didUser = false
// for (let i = 0; i < attempts; i++) {

//   let q7 = prompt('Pick a number');
//   let numberAnswer = parseInt(q7);

//   if (numberAnswer === correctAnswer) {
//     alert('Well done you are correct')
//     // console.log('numberAnswer:' + numberAnswer)
//     didUser = true;
//     totalCorrect ++;
//     break;
//   } else if (numberAnswer < correctAnswer && i < attempts - 1) {
//     alert('Incorrect, Please choose a higher number. (HINT: It\'s less than 20)');
//     // console.log('numberAnswer:' + numberAnswer);
//   } else if (numberAnswer > correctAnswer && i < attempts - 1) {
//     alert('Incorrect, Please choose a lower number. (HINT: It\'s less than 20)');
//   }
// }
// if (!didUser) { alert(`The correct answer was ${correctAnswer}`) }

// let aussieSlang = [ 'YEAHNAH', 'NAHYEAH', 'MATE', 'RECKON', 'BOGAN', 'CRIKEY', 'THONGS' ];
// let guessesRemain = 6;
// let answerSlang = false;
// // console.log('aussieSlang:' + aussieSlang)
// // console.log(aussieSlang.length);

// let q8 = prompt('Can you guess one of the seven Aussie Slang words?').toUpperCase();
// for (let i = 0; i < aussieSlang.length; i++){
//   // console.log(aussieSlang[i]);
//   if (q8 === aussieSlang[i]){
//     alert('NahYeah mate i reckon you got this one correct!');
//     answerSlang = true;
//     totalCorrect ++;
//     break;
//   }
// }while (!answerSlang && guessesRemain){
//   guessesRemain --;
//   console.log(guessesRemain)
//  alert('YeahNah mate guess again!')
//  let q8 = prompt('Can you guess one of the seven Aussie Slang words?').toUpperCase();
//  for (let i = 0; i < aussieSlang.length; i++){
//   //  console.log(aussieSlang[i]);
//    if (q8 === aussieSlang[i]){
//      alert('NahYeah mate i reckon you got this one correct!');
//      answerSlang = true;
//      totalCorrect ++;
//      break;
//    }
//   }
// }

// alert(`${user} you got ${totalCorrect} answers correct out of 8 well done.`)
// console.log(totalCorrect)


