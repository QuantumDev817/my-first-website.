document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("openBtn");
    const secretBox = document.getElementById("secretBox");
    
    // Добавляем музыку
    const audio = new Audio('music.mp3'); 
    audio.loop = true; // Музыка будет играть по кругу
    audio.volume = 0.3; // Громкость 30%, чтобы не оглушило

    btn.addEventListener("click", () => {
        // 1. Включаем музыку
        audio.play().catch(e => console.log("Браузер заблокировал автоплей, но по клику должно работать"));
        
        // 2. Прячем кнопку и показываем секрет
        btn.style.display = "none";
        secretBox.style.display = "block";
        
        // 3. Меняем фон (можно добавить красивую картинку через CSS, если хочешь)
        document.body.style.background = "linear-gradient(135deg, #0a0a0a 0%, #1a0000 100%)";
    });
});