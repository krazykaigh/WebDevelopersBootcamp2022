// TRAVERSING Parent/Child/Sibling

const firstBold = document.querySelector('b');
console.log(firstBold);
// Parents
console.log(firstBold.parentElement);
console.log(firstBold.parentElement.parentElement);
console.log(firstBold.parentElement.parentElement.parentElement);
// Children
console.log(firstBold.childElementCount);

const paragraph = firstBold.parentElement;
console.log(paragraph.childElementCount);
console.log(paragraph.children);

const square = document.querySelector('.square');
console.log(square.parentElement);
console.log(square.children);

// This shows the things like line returns as #text elements
console.log(square.nextSibling);
console.log(square.previousSibling);

// This is the better used method to find the next element I expect
console.log(square.nextElementSibling);
console.log(square.previousElementSibling);

// ADDING ELEMENTS

// Here is how to add a new element 
const image = document.createElement('img');
console.dir(image);
image.src = "https://images.unsplash.com/photo-1602769996864-fef448cd648e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
document.body.appendChild(image);

image.classList.add('square');

const newH3 = document. createElement('h3');
console.log(newH3);
newH3.innerText = 'newH3: I am new!';
document.body.append(newH3);

const p = document.querySelector('p');
p.append('p: I am new text in this first paragraph!!!');

const newB = document.createElement('b');
newB.append('newB: I just got inserted here! ');
document.body.prepend(newB);
console.log(newB);

const newH2 = document.createElement('h2');
newH2.append('newH2: This is about chickens and how to eat them');
console.log(newH2);

const newH1 = document.querySelector('h1');
newH1.innerText=('newH1: I am an h1!')
newH1.insertAdjacentElement("afterend",newH2);

anotherH3 = document.createElement('h3');
anotherH3.innerText = "anotherH3: This is ANOTHER h3";
console.log(anotherH3);
newH1.after(anotherH3);

newB.before(anotherH3);

// // WRITE YOUR CODE IN HERE:
// for (let i = 1; i <= 100; i++){
//     let name = 'button' + i;
//     name = document.createElement('btn');
//     console.log(name);
    
// }

// const container = document.querySelector('#container');
 
// for (let i = 0; i < 100; i++) {
//   const btn = document.createElement('button');
//   btn.innerText = 'Click';
//   container.appendChild(btn);
// }

