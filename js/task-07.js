const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');


function onChengeinput(event){
   
   spanEl.style.fontSize =  event.currentTarget.value + 'px';
 console.log(event )
}

inputEl.addEventListener('input',onChengeinput)

