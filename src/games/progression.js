import getRandomNumber from '../getRandomNumber.js';
import runGameLogic, { roundsNumber } from '../index.js';

const descriptions = 'What number is missing in the progression?';

const generateRound = () => {
  const progressionLength = 10;
  const startNumber = getRandomNumber(1, 10);
  const stepNumber = getRandomNumber(1, 10);
  const missingNumber = getRandomNumber(0, 9);
  const question = [];
  let correctAnswer = 0;
  let result = startNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingNumber) {
      result += stepNumber;
      correctAnswer = result;
      question.push('..');
    } else {
      result += stepNumber;
      question.push(result);
    }
  }
  return [question.join(' '), String(correctAnswer)];
};

const runBrainProgression = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, descriptions);
};

export default runBrainProgression;
