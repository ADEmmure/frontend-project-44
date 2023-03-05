#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomNumber from '../src/getRandomNumber.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
let i = 1;
while (i <= 3) {
  const randomNumber1 = getRandomNumber(10, 20);
  const randomNumber2 = getRandomNumber(0, 10);
  const randomSymbol = getRandomNumber(0, 3); // 1 = '+', 2 = '-', 3 = '*'
  let answer = 0;
  let question = '';
  if (randomSymbol === 1) {
    question = `${randomNumber1} + ${randomNumber2}`;
    answer = (randomNumber1 + randomNumber2);
  } else if (randomSymbol === 2) {
    question = `${randomNumber1} - ${randomNumber2}`;
    answer = (randomNumber1 - randomNumber2);
  } else if (randomSymbol === 3) {
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
