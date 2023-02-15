const commands = `
/start -  Restart BOT
/help - Help me
`;
const text1 = `
    https://telegra.ph/Test-state-02-15
`;
const text2 = `
   btn_2  какой-то текст 
`;
const text3 = `
   Какой вопрос тебя интересует?
`;

const dataTest = [
  {
    grade: '8kyu',
    tasks: [
      {
        name: 'Array to string',
        description: 'Make array to string again!',
        link: 'https://telegra.ph/Test-state-02-15',
      },
      {
        name: 'Sum of numbers',
        description:
          'You need to write a function, that returns sum of the numbers',
        link: 'https://telegra.ph/8kyu-Sum-of-numbers-02-15',
      },
    ],
  },
  {
    grade: '7kyu',
    tasks: [
      {
        name: 'Only numbers',
        description: 'Return an array containing only numbers',
        link: 'https://telegra.ph/7kyu-Only-numbers-02-15',
      },
      {
        name: 'Happy birthday',
        description: 'Concatenate strings with congratulations',
        link: 'https://telegra.ph/7kyu-Happy-birthday-02-15',
      },
    ],
  },
];

module.exports.commands = commands;
module.exports.text1 = text1;
module.exports.text2 = text2;
module.exports.text3 = text3;
module.exports.dataTest = dataTest;
