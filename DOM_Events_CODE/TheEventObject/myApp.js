const button = document.querySelector('button');
button.addEventListener('click', function (evt) {
  // alert("click");
  console.log(evt);
})

const input = document.querySelector('input');
input.addEventListener('keydown', function(evt) {
  console.log('keydown');
  console.log(evt.code); //Name of the Keypressed
  console.log(evt.key); //the actual letter
})

// const input2 = document.querySelector('input');
// input2.addEventListener('keyup', function(evt) {
//   console.log('keyup');
//   console.log(evt);
// })

window.addEventListener('keydown', function(evt){
  switch(evt.code) {
    case 'ArrowUp':
      console.log('UP!!');
      break;
    case 'ArrowDown':
      console.log('DOWN!!');
      break;
    case 'ArrowLeft':
      console.log('LEFT!!');
      break;
    case 'ArrowRight':
      console.log('RIGHT!!');
      break;
    default:
      console.log("NOT AN ARROW!!")

  }
})