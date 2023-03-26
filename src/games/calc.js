import getRandomNumber from '../getRandomNumber.js';
import runGameLogic, { roundsNumber } from '../index.js';

const descriptions = 'What is the result of the expression?';

const generateRound = () => {
  const firstNumber = getRandomNumber(10, 20);
  const secondNumber = getRandomNumber(0, 10);
  const randomSymbol = getRandomNumber(0, 3); // 1 = '+', 2 = '-', 3 = '*'
  let correctAnswer = '';
  let question = '';
  if (randomSymbol === 1) {
    question = `${firstNumber} + ${secondNumber}`;
    correctAnswer = (firstNumber + secondNumber);
  } else if (randomSymbol === 2) {
    question = `${firstNumber} - ${secondNumber}`;
    correctAnswer = (firstNumber - secondNumber);
  } else if (randomSymbol === 3) {
    question = `${firstNumber} * ${secondNumber}`;
    correctAnswer = (firstNumber * secondNumber);
  }
  return [question, String(correctAnswer)];
};

const runBrainCalc = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, descriptions);
};

export default runBrainCalc;
