const buttonEl = document.querySelector(".change-color");


const bodyEl = document.querySelector('body');

const spanEl = document.querySelector(".color");


buttonEl.addEventListener('click', ()=>{
 document.body.style.backgroundColor = getRandomHexColor()
  spanEl.textContent  = getRandomHexColor();
});

function getRandomHexColor(event) {
  
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   
   
};
