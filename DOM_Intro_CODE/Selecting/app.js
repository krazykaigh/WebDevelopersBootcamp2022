// OLDER SPECIALIZED SELECTION METHODS

const allImages = document.getElementsByTagName('img');

for (let anImage of allImages) {
    console.log (anImage.src);
    // anImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
}


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }

const sqrImages = document.getElementsByClassName('square');
console.log(sqrImages);


// The following are face tag,class, and id names 
const tagImages = document.getElementsByTagName('squared');
console.log(tagImages); // empty collection

const classImages = document.getElementsByClassName('squared');
console.log(classImages); // empty collection

const idImages = document.getElementById('squared');
console.log(idImages); // null

// Newer Selector querySelector

const oneImage = document.querySelectorAll('.square');
console.log(oneImage);

const divver = document.querySelector("input[type='checkbox']");
console.log(divver);

const textCont = document.querySelectorAll('p');

for (let tc of textCont) {
    tc.innerText = 'This is the takeover!';
}

document.querySelector('p').innerText = 'This paragraph was re-re-edited for some new reason.'