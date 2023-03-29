/*jshint esversion: 8 */
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 25; i >= 0; i -= 5) {
//   console.log(i);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i < people.length; i++){
//     console.log(people[i].toUpperCase());
// }

// let str = 'LOL';
// for (let i = 0; i<=4; i++) {
//   console.log('Outer:',i);
//   for (let j =0; j< str.length; j++){
//     console.log('   Inner:', str[j]);
//   }
// }

const seatingChart = [
  ['Kristen', 'Johnny', 'Greg', 'Cinddi'],
  ['Mark', 'Mary', 'Tommy', 'Blair','Kevin'],
  ['Leif', 'Nikki', 'Marley', 'Jason']
]

// for (let i=0; i<seatingChart.length; i++){
//   console.log(`Row ${i+1}`);
//   let row = seatingChart[i];
//   for (j=0; j<row.length; j++){
//     console.log(row[j]);
//   }
// }

for (let row of seatingChart){
  for (let student of row) {
    console.log(`Row ${seatingChart.indexOf(row)+1}: ${student}`);
  }
}

// // const SECRET = 'BabyHippo';
// // let guessNumber =1;
// // let guess = prompt('Enter the secret code: ');
// // while (guess !== SECRET) {
// //   console.log(`Guess number ${guessNumber} is wrong`);
// //   console.log('Try again');
// //   guessNumber++;
// //   guess = prompt('Enter the secret code: ');
// // }
// // console.log('You guessed it!!!');

// let targetNum = Math.floor(Math.random()  * 10);
// let guess = 0;
// while(true) {
//   guess = Math.floor(Math.random() * 10);
//   if (guess === targetNum) {
//     console.log(`Correct! Number guessed: ${guess} and target was ${targetNum}`);
//     break;
//   }
//   else {
//     console.log(`Guessed: ${guess}... Incorrect.`)
//   }
// }


// guess= 0;
// let maximum = parseInt(prompt("Enter the maximum number!"));
// const arrayOfUnguessed = [maximum];
// const targetNumb = Math.floor(Math.random() * maximum) + 1;
// console.log(`target number is ${targetNumb}`);
// let numGuesses = 1;
// let included = 0;
//   if (isNaN(maximum)) {
//     console.log('Invalid input. Game over.');

//   } else  {

//   for (let x = 0; x <= maximum; x ++) {
//     arrayOfUnguessed[x]= x;
//   }

//   while(true) {
//     guess = Math.floor(Math.random() * maximum) + 1;
//     if (arrayOfUnguessed.includes(guess)){
//         //  console.log(arrayOfUnguessed);
//       if (guess === targetNumb) {
//         console.log(`That took ${numGuesses} guesses!`)
//         console.log(`Correct! Number guessed: ${guess} and target was ${targetNumb}`);
//         break;
//       }
//       else {
//         included=arrayOfUnguessed.indexOf(guess);
//         arrayOfUnguessed.splice(included,1);

//         numGuesses++;
//         console.log(`Guessed: ${guess}... Incorrect.`)
//       }
//     }
//   }
// }

const wordsList = ['cringe','books','chickens','funny','pics','soccer'];

for (let word of wordsList){
  console.log(word);
};

const testScores = {
  jim   : 89,
  jane  : 90,
  frank : 56,
  blair : 77,
  milo  : 82,
  silvia: 69,
  lisa  : 88
};

console.log(Object.keys(testScores));
console.log(Object.values(testScores));
console.log(Object.entries(testScores));