



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const container = document.querySelector('#boxes');
// const btnCreate = document.querySelector('[data-create]');
// const btnDestroy = document.querySelector('[data-destroy]');
// const input = document.querySelector('input');
// btnCreate.addEventListener('click', createBoxes);
// btnDestroy.addEventListener('click', destroy);

// function createBoxes(amount) {
//   amount = input.value;
//   console.log(input.value)
//   const boxes = [];
//   let size = 20;
//   for(let i=0; i<amount; i++ ) {
//     size+=10;
//     const box = document.createElement('div');
//     box.style.backgroundColor=getRandomHexColor();
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.border = `1px solid ${getRandomHexColor()}`
//     boxes.push(box)
//     console.log(boxes)
//   }

// container.append(...boxes);
// console.log(container)
// }
// function destroy() {
//  container.innerHTML = "";
// }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxEL = document.querySelector("#boxes")
const inputEl = document.querySelector('input');
// console.log(inputEl)
const buttonCreate = document.querySelector('button[data-create]');
// console.log(buttonCreate);
const buttonDestroy = document.querySelector('button[data-destroy]');
// console.log(buttonDestroy);
buttonCreate.addEventListener('click',createDiv)
buttonDestroy.addEventListener('click',buttonDestroyDiv)

function createDiv(event){
 event = inputEl.value
 const boxes = []
 let size = 20;
 for (let i = 0; i < event; i += 1) {
   size += 10;
  const createDivEl = document.createElement('div');

 createDivEl.style.backgroundColor = getRandomHexColor();
 createDivEl.style.width = `${size}px`;
 createDivEl.style.height = `${size}px`;
 createDivEl.style.border = `1px solid ${getRandomHexColor()}`
 boxes.push(createDivEl)
}

 boxEL.append(...boxes);
 
};
function buttonDestroyDiv(){
  boxEL.innerHTML = "";
}