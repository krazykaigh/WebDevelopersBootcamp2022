/*jshint esversion: 8 */
const fitbutt = {
  height : 5.3,
  weight : 135,
  age    : 35,
  name   : 'Sheila'
};
console.log(fitbutt);

console.log(`fitbutt.weight =  ${fitbutt.weight}`);

console.log(`fitbutt.height = ${fitbutt['height']}`);

const midterms = {
  'danielle': 96,
  'thomas': 78
};
console.log(midterms);

midterms.thomas = 79;
console.log(midterms);
midterms.danielle='A';
midterms.thomas='C';
console.log(midterms);
midterms.ezra = 'B+';
midterms['Antonio']="A-";
console.log(midterms);

// An array of objects
const shoppingCart = [
  {
    product : 'Jenga Classic',
    price   : 6.88,
    quantity: 2
  },
  {
    product : 'Google Nest',
    price   : 179.99,
    quantity: 1
  },
  {
    product : 'Google Chromecast',
    price: 49.99,
    quantity: 2

  }
];
console.log(shoppingCart);
// Reference Google Chromecast
console.log(`Reference product in 3d object of array = ${shoppingCart[2].product}`);


// An object storing an array and another objectg
const student = {
  firstName: 'David',
  lastName: 'Cooper',
  strengths: ['Music', 'Art'],
  exams : {
    midterm: 89,
    final: 92
  }
};
console.log(student);
// Reference Music
console.log(`Reference strengths[0] = ${student.strengths[0]}`);
console.log(`Reference midterm = ${student.exams.midterm}`);

