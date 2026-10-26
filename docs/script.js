const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');
const screen3 = document.getElementById('screen3');

let clickCount = 0; 

// 1. ТЕЛЕПОРТАЦИЯ КНОПКИ "НЕТ" (МЫШКА)
btnNo.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - btnNo.offsetWidth - 20; 
    const maxY = window.innerHeight - btnNo.offsetHeight - 20;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.position = 'fixed'; 
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';

    // Кнопка "Да" растет
    clickCount++;
    btnYes.style.transform = `scale(${1 + clickCount * 0.1})`; 
});

// 2. ТЕЛЕПОРТАЦИЯ КНОПКИ "НЕТ" (ТАЧ НА ТЕЛЕФОНЕ)
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    const maxX = window.innerWidth - btnNo.offsetWidth - 20;
    const maxY = window.innerHeight - btnNo.offsetHeight - 20;
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = Math.floor(Math.random() * maxX) + 'px';
    btnNo.style.top = Math.floor(Math.random() * maxY) + 'px';

    clickCount++;
    btnYes.style.transform = `scale(${1 + clickCount * 0.1})`; 
});

// 3. ПЕРЕХОД НА ЭКРАН 2
btnYes.addEventListener('click', () => {
    screen1.style.display = 'none'; 
    screen2.style.display = 'flex'; 
});

// 4. ПЕРЕХОД НА ЭКРАН 3 (СЮРПРИЗ) И ЗАПУСК РОЗ
btnNext.addEventListener('click', () => {
    screen2.style.display = 'none';
    screen3.style.display = 'flex';
    startRoseRain();
});

// 5. ФУНКЦИЯ ПАДАЮЩИХ РОЗ
function startRoseRain() {
    const roses = ['🌹', '🌺', '🌸', '✨', '💖']; 
    
    const roseInterval = setInterval(() => {
        const rose = document.createElement('div');
        rose.classList.add('falling-rose');
        
        rose.innerText = roses[Math.floor(Math.random() * roses.length)];
        rose.style.left = Math.random() * 100 + 'vw';
        
        const duration = Math.random() * 2 + 2; 
        rose.style.animationDuration = duration + 's';

        document.body.appendChild(rose);

        setTimeout(() => {
            rose.remove();
        }, duration * 1000);
        
    }, 150);

    // Останавливаем генерацию через 10 секунд, чтобы не лагало
    setTimeout(() => clearInterval(roseInterval), 10000);
}

// 6. КНОПКА "ПРОЙТИ ЗАНОВО"
btnRestart.addEventListener('click', () => {
    screen3.style.display = 'none';
    screen1.style.display = 'flex';
    clickCount = 0;
    btnYes.style.transform = 'scale(1)'; 
    
    // Возвращаем кнопку "Нет" на исходную позицию
    btnNo.style.position = 'relative'; 
    btnNo.style.left = '0px';
    btnNo.style.top = '0px';
});
