function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change-color 
// и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.
const btn = document.querySelector('button.change-color');
const span = document.querySelector('span.color');

btn.addEventListener('click', onColorChanges);
function onColorChanges() {
  const color = getRandomHexColor();
  span.textContent = color;
  document.body.style.background = color;
}
