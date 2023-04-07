/*jshint esversion: 8 */
// For Each
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
// numbers.forEach(function (el) {
//   if (el % 2 === 0){
//   console.log(el);
//   }
// });

for (let el of numbers) {
  console.log(el);
}
const movies = [
  {
    title : 'Amadeus',
    score : 99,
    year  : 1993
  },
  {
    title : 'Stand By Me',
    score : 93,
    year  : 1998
  },
  {
    title : 'Parasite',
    score : 87,
    year  : 2015
  },
  {
    title : 'Aliens',
    score : 92,
    year  : 1982
  }
];

const goodMovies = movies.filter((m) => {
  return m.score > 92;
});
const goodTitles = goodMovies.map(m => m.title);
console.log(goodTitles);

const movieTitles = movies.map((movieTitle) => (
   movieTitle.title.toUpperCase()
  //return movieTitle;  // This makes a copy of movies
  )
);

console.log(movieTitles);
// for (let movie of movies) {
//   console.log(`${movie.title} = ${movie.score}/100`);
// }

// movies.forEach(function(movie){
//   console.log(`${movie.title} - ${movie.score}/100`); 
// });
const trplNums = numbers.map(function(trip) {
  return trip*3;
});

console.log(trplNums);


const texts = ['rolf', 'lol','omg','ttyl'];
const capsTexts = texts.map(function(t) {
  return t.toUpperCase();
});
console.log(texts);
console.log(capsTexts);



// ARROW FUNCTIONS, FUNCTION EXPRESSION

const add = (x, y) => {
  return x + y;
};

console.log(`Adding 3 and 5 gets me ${add(3,25)}`);

const square = sqr => {
  return sqr ** 2;
};


console.log(`The square of 4 is ${square(4)}`);

for (let i = 1; i <7; i ++){
  const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  console.log(`Roll ${i}: ${rollDie()}`);
}

// IMPLICIT RETURNS

for (let i = 1; i <7; i ++){
  const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
  );
  console.log(`Implicit roll ${i}: ${rollDie()}`);
}

// Callback Method SetTimeout

console.log('Hello there')
  setTimeout(() => {
    console.log("Are you still there");
  }, 2500);

console.log('Good bye');

// const id = setInterval(() =>{
//   console.log(Math.random());  
// }, 2000);

// The FILTER Method
const nums = [9, 8, 7, 6,5,4,3,2,1, 10, 11, 12,13,14,15,16,17,18,19,20];
const odds = nums.filter(n => {
  return n % 2 === 1;
});

console.log(odds);

const fours = nums.filter(n => {
  return n ===4;
});

console.log(fours);

function validUserNames(usernames) {
  // your code here
  const shortNames = usernames.filter((u) => {
      return u.length < 10;
  });
  return shortNames;
}

userNames=['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']
const shortNames = validUserNames(userNames);
console.log(shortNames);

// EVERY SOME
// EVERY
const moreWords = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];
// Are there any words longer than 4 characters
const otherWords = moreWords.every(word => {
  return word.length < 8;
});
console.log(otherWords);
// TEST
const allEvens =function(array) {
  return array.every(num => num % 2 === 0);
};

console.log(allEvens([2,4,6,8]));

console.log(allEvens([1,4,6,8]));

// SOME
const evenMoreWords = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];
// Are there any words longer than 4 characters
const someMoreWords = evenMoreWords.some(word => {
  return word.length > 14;
});
console.log(someMoreWords);

// REDUCE
const arr = [294,23,1,143,5,73,-9,15,23];
const reducer = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(reducer);

// Use reduce to find minimum value in array
let minFinder = arr.reduce((min, currentValue) => {
  if(currentValue < min) {
    return currentValue;
  } 
  return min;
});

console.log(minFinder);

// Use reducer to find best movie

const worstestMovie = movies.reduce((worstMovie, currMovie) => {
  if (currMovie.score < worstMovie.score) {
    return currMovie;
  }
  return worstMovie;
});

console.log(worstestMovie);

const justEvens = [2,4,6,8,10];
const startPoint = justEvens.reduce((sum, num) => sum + num, 100);
console.log(startPoint);

