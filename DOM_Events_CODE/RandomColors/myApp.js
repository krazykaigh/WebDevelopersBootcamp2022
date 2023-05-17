chngBtn = document.querySelector('button');
bckgrnd = document.querySelector('h1');

chngBtn.addEventListener('click', function () {
  console.log('clicked button');

  let RGrBl = getRandColor();
  document.body.style.backgroundColor = RGrBl;
    bckgrnd.innerText = RGrBl;
})

const getRandColor = function() {
  let rNum = Math.floor (Math.random() *  255);
  let gNum = Math.floor (Math.random() *  255);
  let bNum = Math.floor (Math.random() *  255);

  return `rgb(${rNum}, ${gNum}, ${bNum})`;
}