
const inputEl = document.querySelector('input'); 
 
function onInputChange() { 
   console.log(inputEl.dataset.length); 
  console.log(inputEl.value.length); 
  if (inputEl.value.length === +inputEl.dataset.length) { 
    inputEl.classList.add('valid'); 
    inputEl.classList.remove('invalid'); 
    return; 
  } 
  inputEl.classList.add('invalid'); 
  inputEl.classList.remove('valid'); 
} 
 
inputEl.addEventListener('blur', onInputChange);