// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться
//  текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки,
// внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const value = document.querySelector('#value');
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
decrement.addEventListener('click', () => {
    console.log('click decrement button');
    value.addEventListener('click', onClickCounterValue);
    counterValue += 1;
    value.textContent = counterValue;
});
increment.addEventListener('click', () => {
    console.log('clik on increment button');
    value.removeEventListener('click', onClickCounterValue);
    counterValue -= 1;
    value.textContent = counterValue;
});
function onClickCounterValue() { console.log('click counterValue') };