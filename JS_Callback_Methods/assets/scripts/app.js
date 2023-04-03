/*jshint esversion: 8 */
// For Each
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
// numbers.forEach(function (el) {
//   if (el % 2 === 0){
//   console.log(el);
//   }
// });

// for (let el of numbers) {
//   console.log(el);
// }
// const movies = [
//   {
//     title: 'Amadeus',
//     score: 99
//   },
//   {
//     title: 'Stand By Me',
//     score: 93
//   },
//   {
//     title: 'Parasite',
//     score: 87
//   },
//   {
//     title: 'Aliens',
//     score: 92
//   }
// ];

// for (let movie of movies) {
//   console.log(`${movie.title} = ${movie.score}/100`);
// }

// movies.forEach(function(movie){
//   console.log(`${movie.title} - ${movie.score}/100`); 
// });
const trplNums = numbers.map(function(d) {
  return d*3;
});

console.log(trplNums);


const texts = ['rolf', 'lol','omg','ttyl'];
const capsTexts = texts.map(function(t) {
  return t.toUpperCase();
});
console.log(texts);
console.log(capsTexts);