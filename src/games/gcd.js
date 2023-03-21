import getRandomNumber from '../getRandomNumber.js';
import runGameLogic, { roundsNumber } from '../index.js';

const descriptions = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  let firstNumber = getRandomNumber(0, 100);
  let secondNumber = getRandomNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  let correctAnswer = '';
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  correctAnswer = String(firstNumber);
  return [question, correctAnswer];
};

const runBrainGcd = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, descriptions);
};

export default runBrainGcd;
