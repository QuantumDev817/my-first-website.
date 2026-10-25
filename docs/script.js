document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("openBtn");
    const secretBox = document.getElementById("secretBox");
    const petalsContainer = document.getElementById("petals-container");
    
    // Находим главный контейнер, в котором лежит старый текст
    const mainContainer = document.querySelector(".container");

    function createRose() {
        const rose = document.createElement("div");
        rose.classList.add("rose");
        rose.innerText = "🌹"; 
        
        const size = Math.random() * 20 + 15; 
        rose.style.fontSize = `${size}px`;
        rose.style.left = `${Math.random() * 100}vw`;
        
        const duration = Math.random() * 4 + 3; 
        rose.style.animationDuration = `${duration}s`;
        
        petalsContainer.appendChild(rose);

        setTimeout(() => {
            rose.remove();
        }, duration * 1000);
    }

    btn.addEventListener("click", () => {
        // Плавно убираем кнопку
        btn.classList.add("fade-out");
        
        // ВОТ ГЛАВНАЯ СТРОКА: добавляем класс, который прячет старый текст через CSS
        mainContainer.classList.add("hide-old");

        // Показываем секрет
        setTimeout(() => {
            secretBox.classList.add("show");
        }, 400);

        // Запускаем розы
        const roseInterval = setInterval(createRose, 150);

        setTimeout(() => {
            clearInterval(roseInterval);
        }, 10000);
    });
});
