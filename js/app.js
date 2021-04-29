'use strict'

function helloGreeting() {
        
  let today = new Date();
  let hourNow = today.getHours();
  let greeting;

      if (hourNow > 18) {
          greeting = 'Isn\'t It A Little Late To Be Learning About Me!';
      } else if (hourNow > 12) {
          greeting = 'Thinking About Me Part Way Through The Day Is A Little Strange Don\'t You Think!';
      } else if (hourNow > 0) {
          greeting = 'It\'s A Great Day To Learn About Me!';
      } else {
          greeting = 'What Time Is It! ';
      }

  return '<h3>' + greeting + '</h3>';
  
  }

function userName () {
let person = prompt ("What is your name?").toUpperCase();  
    let greeting;

  if (person !== '') { 
        greeting = 'Hello ' + person + '!' ; 
        
    }

  else {
        greeting = "Hello  Human!";
    }
     alert (greeting)  
return '<h3>' + greeting + '</h3>';
}

function quiz() {
let q1 = prompt ('Are you ready to play a Yes or No question game? Answer Y/N!').toUpperCase();

if(q1 === 'YES' || q1 === 'Y'){
  // console.log('q1:' + q1);
  alert('Great let\'s get started')}
else if (q1 === 'NO' || q1 === 'N'){
alert ('Please play along!')
}
else { alert ('Don\'t give up yet' )
}


let q2 = prompt ('Was i born in Canada?').toUpperCase();
  if(q2 === 'YES' || q2 === 'Y'){
    // console.log('q2:' + q2);
    alert('Incorrect, I was born in Australia!')}
  else if (q2 === 'NO' || q2 === 'N'){
  alert ('Correct, However i\'m a Canadian citizen by birth right.')
  }
 


let q3 = prompt ('Did i complete highschool?' ).toUpperCase();
  if(q3 === 'YES' || q3 === 'Y'){
    // console.log('q3:' + q3);
    alert ('Incorrect, I left at the end of grad-10 to start my plumbing apprenticeship at age-16')}
  else if (q3 === 'NO' || q3 === 'N'){
  alert ('Correct, I left school to start my plumbing apprenticeship at age 16, True fact i had to ride 5km to work every morning.')
  }
 
let q4 = prompt ('Do i own a dog?').toUpperCase();
  if(q4 === 'YES' || q4 === 'Y'){
    console.log('q4:' + q4);
    alert('Correct, I owen a 17 week old Husky puppy called Benzaiten!')}
  else if (q4 === 'NO' || q4 === 'N'){
  alert ('Incorrect, I owen a 17 week old Husky puppy called Benzaiten!')
  }

let q5 = prompt ('Do i know how many tattoos i have?').toUpperCase();
  if(q5 === 'YES' || q5 === 'Y'){
    console.log('q5:' + q5);
    alert('Incorrect, All i know is i\'ve got 300+ hours of being tattooed and won\'t stop till i complete the vision i had at 13. ')}
  else if (q5 === 'NO' || q5 === 'N'){
  alert ('Correct, All i know is when i\'m finished i\'ll be 99% covered and have only one tattoo!!!  ')
  }

let q6 = prompt ('Is coding my dream career?').toUpperCase();
  if(q6 === 'YES' || q6 === 'Y'){
    console.log('q6:' + q6);
    alert('Incorrect, i\'m learning to code because of a workplace accident, I plan on becoming a tattoo artist by the age of 40.')}
  else if (q6 === 'NO' || q6 === 'N'){
  alert ('Correct, I plan on becoming a tattoo artist by the time i\'m 40!')}
  
  

}

