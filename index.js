var readlineSync = require('readline-sync');

console.log("How well do you know me! \n")
console.log("Select the quality you know best about me ");
character = ['Birth', 'School', 'Hobby', 'Book', 'Food'];

index = readlineSync.keyInSelect(character, ' \n Which quality would you like to choose ?');
console.clear();
score = 0;
function quiz(question, answer) {
  var answerGiven = readlineSync.question(question);

  if (answerGiven === answer) {
    console.log(" \n \t You are right! \n");
    score = score + 1;
  } else {
    console.log("\t You are wrong! \n \n The correct answer is " + answer );
    score = score - 1;
  }
}

function welcomeChar() {
  console.log("Do you know this " + character[index] + " detail about me? \n");
}

switch (index) {
  case 0:
    welcomeChar();
    quiz("\t Where was I born? ", "Udupi");
    quiz("\t Which month was I born? ", "August");
    break;

  case 1:
    welcomeChar();
    quiz("\t What is the name of my school ? ", "WEES");
    quiz(" \t Which year did I passout ? ", "2013");
    break;

  case 2:
    welcomeChar();
    quiz("\t What is my hobby ? ", "Coding");
    quiz("\t Is singing my hobby ? ", "No");
    break;

  case 3:
    welcomeChar();
    quiz("\t Which is my favourite fiction book ? ", "The Shiva Trilogy");
    quiz("\t Have I ever read The Monk who sold his Ferrari ? ", "Yes");
    break;

  case 4:
    welcomeChar();
    quiz("\t Which is my favourite dish ? ", "Dosa");
    quiz("\t Do I love sweet or spicy dishes ? ", "Spicy")
    break;

}
console.clear();
if (score > 1) {
  console.log(" \t You know me well my friend ");
} else {
  console.log(" \t omae wa mou shindeiru!" );
}