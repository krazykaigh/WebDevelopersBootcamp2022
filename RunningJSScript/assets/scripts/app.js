/*jshint esversion: 8 */
console.log("Hello from JS");
// console.log("Before Conditional");
let random = Math.random();
if (random >= 0.5) {
  console.log(`Random number is greater or equal to than 0.5. Random = ${random}`);
} else
{
  console.log(`Random number is less than 0.5. Random = ${random}`);
}
// console.log("After Conditional");
let price = 0;
let age = Math.random() * 90;
if (age <= 5) {
  price = 0;
  console.log(`Your child may enter for free!`);
} else if (age > 5 && age <= 10) {
  price = 10;
  console.log(`You child is ${parseInt(age)} years old. The entry fee is $${price}.00.`);

} else if (age > 10 && age <= 64) {
  price = 20;
  console.log(`You are ${parseInt(age)} years old. The entry fee is $${price}.00.`);

} else {
  price = 10;
  console.log(`You are ${parseInt(age)} years old. The entry fee is $${price}.00.`);

}