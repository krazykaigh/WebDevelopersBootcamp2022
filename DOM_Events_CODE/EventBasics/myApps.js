
const btn1 = document.querySelector('#v1');

btn1.addEventListener("click", function() {
  alert('you clicked me!'); 
});

function scream() {
  console.log("AAAAAHHHHH");
  alert("STOP TOUCHING ME!");
}
btn1.onmouseleave = scream;

const btn2 = document.getElementById(`b2`);

btn2.addEventListener("dblclick", () => {
  console.log('Did you just double click me?');
  alert('You double clicked me');
})

function twist() {
  console.log("Twist!");
  
}
function shout() {
  alert("SHOUT");
  
}
const tasButton = document.getElementById('tas');

// tasButton.onclick = twist;

// tasButton.ondblclick = shout;

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);

btn3 = document.getElementById('v3');

btn3.addEventListener('mouseout', () => {
  console.log("Why'd you leave me?");
})