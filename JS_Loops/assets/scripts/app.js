/*jshint esversion: 8 */
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++){
    console.log(people[i].toUpperCase());
}

let str = 'LOL';
for (let i = 0; i<=4; i++) {
  console.log('Outer:',i);
  for (let j =0; j< str.length; j++){
    console.log('   Inner:', str[j]);
  }
}