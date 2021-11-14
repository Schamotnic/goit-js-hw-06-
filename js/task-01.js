

const listWithClass = document.querySelector('#categories');
const list = listWithClass.children.length;
console.log(`Number of categories:${list}`)

const itemsRef = document.querySelectorAll('.item');

itemsRef.forEach(element => {
  console.log(element.firstElementChild.textContent );
  console.log(element.lastElementChild.children.length);
  const title = element.querySelector('h2').innerHTML;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Категория: ${title}  Количество элементов: ${itemsLength}`);
});



