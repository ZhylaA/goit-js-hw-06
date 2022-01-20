const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. 
// Обзательно используй метод document.createElement().

// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
const ingList = document.querySelector('#ingredients');
const elements = ingredients.map(ing => { 
  const elementLi = document.createElement("li");
  elementLi.classList.add('item');
  elementLi.textContent = ing;
  return elementLi;
});
ingList.append(...elements);
console.log(ingList);
