

// const refs = {
//    input: document.querySelector('#name-input'),
//   span: document.querySelector('#name-output'),
// };
//  refs.input.addEventListener('input',onInputChange)

//  function onInputChange(event){
//     console.log(event.currentTarget.value);
    
//  }

 const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const inputEl = input.addEventListener('input',onInputChange);

function onInputChange(event){
   span.textContent = event.currentTarget.value;
  }; 
   


 


