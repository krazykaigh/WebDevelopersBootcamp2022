/*jshint esversion: 8 */
function rollDie (sides) {
  // Old way before Default Params
  if (sides === undefined) {
    sides = 6;
  }  
  return Math.floor(Math.random() * sides) +1;
}

console.log(`Old way ${rollDie(6)}`);
console.log(`Old way ${rollDie(20)}`);
console.log(`Old way ${rollDie(6)}`);


// New Way with default value
function rollDieAgain (numSides = 6) {
  return Math.floor(Math.random() * numSides) +1;
}
console.log(`New way ${rollDieAgain(6)}`);
console.log(`New way ${rollDieAgain(100)}`);
console.log(`New way ${rollDieAgain()}`);

function greet(msg='Hello', person='you') {
  console.log(`${msg} ${person}`);
}
greet();
greet('Wuzzup');
greet(undefined,'Billy'); // Use undefined to force the default param

