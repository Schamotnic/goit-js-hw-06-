const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const lists = document.querySelector('#ingredients');

const macklistEl = options => {
 return  options.map( option => {
   const list = document.createElement('li');
   list.classList.add('item');
   list.textContent = option;
     
 return list
 
});
};

 const element = macklistEl(ingredients )

lists.append(...element);
console.log(macklistEl);




