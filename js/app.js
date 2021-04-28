'use strict'


var person = prompt ("What is your name?");  
    var greeting;

    if (person !== '') { 
        greeting = 'Hello ' + person + '!' ; 
    }

    else {
        greeting = "Hello  Human!";
    }

    while (person === null) 
           {person = prompt ("What Is Your Name")
        greeting = "Hello " + person + "!";
        }
