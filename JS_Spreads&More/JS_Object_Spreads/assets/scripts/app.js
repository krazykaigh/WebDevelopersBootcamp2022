/*jshint esversion: 8 */

const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };
console.log(feline);
console.log(canine);


const dog = { ...canine, isPet: true };
// {family "Canine", furry: true, isPet: true }

const lion = { ...feline, genus: 'Panthera' };
// (legs: 4, family: "Feline", genus: "Panthera")

const catDog = { ...feline, ...canine, family: 'Felanine', isHybrid: true };
// (legs: 4, family: 'Felinine, furry: true, isPet: true, isHybrid: true);
console.log(catDog);

catDogNew = {...catDog};
if (catDogNew === catDog) {
  console.log('catDogNew is equal to catDog');
} else {
  console.log('catDogNew is NOT equal to catDog');
}

catDogNew.family= 'Freak';
console.log(catDogNew);

// Object
arr = [3,2,56,62,98];
objArrays = 
{
  content: 'Numbers',
  arr1: {...arr} // Spread the array into the object
};
console.log(objArrays);
console.log(objArrays.arr1["2"]); // Find the notation to id a key value pair
objArrays.arr1[0]={...arr}; // Spread the array into the object w/in object
console.log(objArrays);
console.log(objArrays.arr1[0][0]); // Display value of object in object in object

str = 'Just some words in a string';
objArray2 = {...str};
console.log(objArray2);

anotherObj = {...arr};
console.log(anotherObj);

const dataFromForm = {
  email: 'gluemen@gmail.com',
  password: 'tobbygunner2332',
  username: 'tgunny'
};

let id = 2223;
let isAdmin = true;

const employeeData  ={...dataFromForm, id, isAdmin};
console.log(employeeData);
