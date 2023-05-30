const inputForm = document.querySelector("#shelterForm");
const input = document.querySelector("#animalName");
const list = document.querySelector("#animals");

shelterForm.addEventListener("submit", function(e) {
  e.preventDefault();
  animalName= (input.value);
  if (validStr(animalName)){
    const newLi= document.createElement("li");
    newLi.innerText = animalName;
    list.append(newLi);
    input.value=" ";
  } else {
    input.value="";
  }

})

const validStr = (str) => str ? true : false