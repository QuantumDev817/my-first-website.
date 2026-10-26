const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

// ВОТ ЗДЕСЬ 1: Объявляем счетчик в самом начале, вне функций. 
// Если бы он был внутри mouseover, он бы каждый раз обнулялся.
let clickCount = 0; 

// 1. ЛОГИКА КНОПКИ "НЕТ" (ТЕЛЕПОРТАЦИЯ ДЛЯ МЫШКИ)
btnNo.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - btnNo.offsetWidth - 20; 
    const maxY = window.innerHeight - btnNo.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.position = 'fixed'; 
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';

    // ВОТ ЗДЕСЬ 2: Увеличиваем счетчик и растягиваем кнопку "Да"
    clickCount++;
    btnYes.style.transform = `scale(${1 + clickCount * 0.1})`; 
});

// 2. ЛОГИКА КНОПКИ "НЕТ" (ТЕЛЕПОРТАЦИЯ ДЛЯ ТЕЛЕФОНОВ)
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Убираем стандартный клик
    
    const maxX = window.innerWidth - btnNo.offsetWidth - 20;
    const maxY = window.innerHeight - btnNo.offsetHeight - 20;
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = Math.floor(Math.random() * maxX) + 'px';
    btnNo.style.top = Math.floor(Math.random() * maxY) + 'px';

    // ВОТ ЗДЕСЬ 3: То же самое для тапов на экране
    clickCount++;
    btnYes.style.transform = `scale(${1 + clickCount * 0.1})`; 
});

// 3. ЛОГИКА КНОПКИ "ДА" (ПЕРЕХОД)
btnYes.addEventListener('click', () => {
    screen1.style.display = 'none'; 
    screen2.style.display = 'block'; 
});
