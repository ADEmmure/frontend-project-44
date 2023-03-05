#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
let i = 1;
while (i <= 3) {
  const randomNumber1 = Math.ceil(Math.random() * (20 - 10)) + 10;
  const randomNumber2 = Math.ceil(Math.random() * (10 - 1)) + 1;
  const arrSimbol = Math.ceil(Math.random() * (3 - 0)) + 0; // 1-+,2--,3-*
  let answer = 0;
  let question = '';
  if (arrSimbol === 1) {
    question = `${randomNumber1} + ${randomNumber2}`;
    answer = (randomNumber1 + randomNumber2);
  } else if (arrSimbol === 2) {
    question = `${randomNumber1} - ${randomNumber2}`;
    answer = (randomNumber1 - randomNumber2);
  } else if (arrSimbol === 3) {
    question = `${randomNumber1} * ${randomNumber2}`;
    answer = (randomNumber1 * randomNumber2);
  }
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  if (userAnswer === String(answer)) {
    console.log('Correct!');
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
    i += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again, ${name}!`);
    break;
  }
}
