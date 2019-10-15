const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {
};

rl.question('What is your name? ', (answer) => {
  answers.q1 = answer;
    rl.question('What is your favorite activity? ', (answer) => {
      answers.q2 = answer;
      rl.close();
      console.log(`Hi I'm ${answers.q1} and I love ${answers.q2}`);
    });
});
