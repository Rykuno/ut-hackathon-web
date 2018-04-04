const correctPhrases = [
  'Nice Job!',
  'Cool, you can Google.',
  'Youre not the dumbest person on the planet it seems; Just count your lucky stars hes still alive though.'
];

const incorrectPhrases = [
  'That answer was bad, and you should feel bad',
  'Did you learn anything in class?',
  'No Rainwater curve here. Just wrong, dead wrong.',
  'This seems like the wrong career path for you',
  'Hacking? More like lacking...the right answer! ...No? nobody?',
  'Youre almost as good at hacking as John Mcafee! Oh wait, I meant John Mccain. Wrong answer.'
];

export const getRandomCorrectPhrase = () => {
  const randomNum = Math.floor(Math.random() * (correctPhrases.length));
  return correctPhrases[randomNum];
};

export const getRandomIncorrectPhrase = () => {
  const randomNum = Math.floor(Math.random() * (incorrectPhrases.length));
  return incorrectPhrases[randomNum];
};
