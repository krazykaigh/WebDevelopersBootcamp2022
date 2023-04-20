const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }
//  innerHTML vs. innerText vs. textContent

// console.log(document.querySelector('h1').innerText);
// console.log(document.querySelector('h1').innerText = `<i> Silk Road </i>`);

console.log(document.querySelector('h1').innerHTML);
console.log(document.querySelector('h1').innerHTML = '<i> Silk Road </i>');

console.log(document.querySelector('h1').innerHTML += '<sup>3</sup>');
const hone = document.querySelector('h1');
hone.style.fontSize = '3em';

// avoid using textContent until it is better understood
// console.log(document.querySelector('h1').textContent += 'Stuff');
for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

const firstLink = document.querySelector('a');
firstLink.getAttribute('href');
firstLink.getAttribute('title');

const inputter = document.querySelector("input[type='text']");
console.log(inputter);

inputter.type = 'color'; // changes type to color picker
inputter.type = 'checkbox'; // changes type to checkbox

const namer = document.querySelector('span name');
console.log(namer);

console.log(window.getComputedStyle(hone));
console.log(window.getComputedStyle(hone).fontSize);
console.log(window.getComputedStyle(hone).fontFamily);

const h2 = document.querySelector('h2');
console.log(h2.classList);
// h2.classList.add('purple');
h2.classList.add('border');

console.log(h2.classList);
console.log(h2.classList.contains('border'));
console.log(h2.classList.contains('purple'));

h2.classList.toggle('purple');
console.log(h2.classList);