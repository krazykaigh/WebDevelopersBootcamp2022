

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve(`Your Fake Data Here`);
//       }
//       reject('Request Err');
//     }, 3000)
//   })
// }

// fakeRequest('/dogs/1')
// .then((data) => {
//   console.log("DONE WITH REQUEST")
//   console.log("data is: ", data)
// })
// .catch((err) => {
//   console.log("OH NO!!!", err)
// })

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      document.body.style.backgroundColor = color
      resolve();
    }, delay)
  })
}
 for (let i = 0; i < 3; i++) {

  delayedColorChange("orange", 2000)
    .then(() =>  delayedColorChange("green", 2000))
    .then(() => delayedColorChange("magenta", 2000))
    .then(() => delayedColorChange("blue", 2000))
    .then(() => delayedColorChange("white", 2000));
    console.log(i); // this happens while the promise is getting done
}

