const myInput = document.querySelector('input');
const  myH1 = document.querySelector('h1');
// myInput.addEventListener('change', () => {
//   console.log(myInput.value);
// })

myInput.addEventListener('input', () => {
  myH1.innerText = myInput.value;
})