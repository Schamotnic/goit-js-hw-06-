


const decrementtEl = document.querySelector('button[data-action= "decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');



let counterValue = 0;

const decrement = () => {
   counterValue -= 1;
   value.textContent = counterValue;
 };
   
const increment = () => {
   counterValue += 1;
   value.textContent = counterValue;
 };
   
incrementEl.addEventListener('click', increment);
decrementtEl.addEventListener('click', decrement);