#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the namber is even, otherwise answer "no".');
let i = 1;
while (i <= 3) {
  const randomNumber = Math.ceil(Math.random() * (50 - 10)) + 10;
  const userAnswer = readlineSync.question(`Question: ${randomNumber}`);
  let answer = '';
  if (randomNumber % 2 === 0) {
    answer = 'yes';
  } else if (randomNumber % 2 !== 0) {
    answer = 'no';
  }
  console.log(`Your answer: ${userAnswer}`);
  if (userAnswer === answer) {
    console.log('Correct!');
    if (i === 3) {
      console.log(`Congratulations,${name}!`);
    }
    i += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again, ${name}!`);
    break;
  }
}
