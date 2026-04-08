// Знаходимо блоки-контейнери
const apart3 = document.querySelector('.apart-3 .object');
const apart1 = document.querySelector('.apart-1 .object');
const house = document.querySelector('.house .object');
const money = document.querySelector('.money .object');

// Знаходимо кнопки
let btn1 = document.querySelector('.variant-1');
let btn2 = document.querySelector('.variant-2');
let btn3 = document.querySelector('.variant-3');

// Функція для очищення попередніх кольорів
function resetColors() {
    [ apart3, apart1, house, money ].forEach(el => {
        el.classList.remove('bg-third', 'bg-green', 'bg-red', 'bg-split');
    });
}

// Обробка Variant 1
btn1.addEventListener('click', () => {
    resetColors();
    apart3.classList.add('bg-green');
    apart1.classList.add('bg-green');
    house.classList.add('bg-red');
    money.classList.add('bg-red');
});

// Обробка Variant 2
btn2.addEventListener('click', () => {
    resetColors();
    apart3.classList.add('bg-green');
    apart1.classList.add('bg-red');
    house.classList.add('bg-split');
    money.classList.add('bg-green');
});

// Обробка Variant 3
btn3.addEventListener('click', () => {
    resetColors();
    apart3.classList.add('bg-green');
    apart1.classList.add('bg-red');
    house.classList.add('bg-green');
    money.classList.add('bg-red');
});