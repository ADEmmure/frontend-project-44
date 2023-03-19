import readlineSync from 'readline-sync';

export const roundsNumber = 3;

const runGameLogic = (rounds, descriptions) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(descriptions);
  for (let i = 0; i < roundsNumber; i += 1) {
    const [question, answer] = rounds[i];
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === answer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations,${name}!`);
        return;
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again, ${name}!`);
      return;
    }
  }
};

export default runGameLogic;
