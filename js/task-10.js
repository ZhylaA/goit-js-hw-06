// Напиши скрипт создания и очистки коллекции элементов. 

// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), 
// которая принимает один параметр - число.
// Функция создает столько < div >,
// сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
//  Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), 
// которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

// При нажатии на кнопку Очистить, коллекция элементов очищается.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.querySelector('#boxes');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
create.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);
let number = 0;
input.addEventListener('change', (event) => number = event.currentTarget.value);
// create.addEventListener('click', createBoxes(number));
function createBoxes(amount) {
 let initialSize = 30;
  for (let i = 0; i < amount; i += 1)
  {
    let size = initialSize + i * 10;
    const div = document.createElement('div');
    div.style.width = "${size}px";
    div.style.height = "${size}px";
    div.style.backgroundColor = getRandomHexColor();
  }  
};
function destroyBoxes() {
  boxes.innerHTML = '';
};