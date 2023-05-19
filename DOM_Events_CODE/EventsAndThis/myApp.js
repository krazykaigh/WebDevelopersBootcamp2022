const getRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');
for (let button of buttons){
  button.addEventListener('click', clickedMe)
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
  h1.addEventListener('click', clickedMe)
}

// Why doesn't this work?
// const clicked = function() {
//   this.style.backgroundColor = getRandColor();
//   this.style.color = getRandColor();
// }

function clickedMe() {
  this.style.backgroundColor = getRandColor();
  this.style.color = getRandColor();
}