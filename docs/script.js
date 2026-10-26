/* --- БАЗОВЫЕ НАСТРОЙКИ --- */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    /* Убираем черный цвет, делаем глубокий темно-синий/фиолетовый градиент */
    background: radial-gradient(circle at top right, #1a103c 0%, #050505 60%);
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* --- ЭКРАНЫ --- */
.screen {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    z-index: 10;
}

/* --- СТЕКЛЯННАЯ КАРТОЧКА (Glassmorphism) --- */
.card {
    background: rgba(255, 255, 255, 0.03); /* Очень прозрачный белый */
    backdrop-filter: blur(16px); /* Размытие фона */
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1); /* Тонкая светлая рамка */
    padding: 50px 40px;
    border-radius: 24px;
    text-align: center;
    max-width: 450px;
    width: 100%;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); /* Глубокая тень */
}

/* --- ЗАГОЛОВКИ --- */
.title {
    font-family: 'Space Grotesk', sans-serif; /* Современный, технологичный шрифт */
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 40px;
    line-height: 1.2;
    background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; /* Делаем текст градиентным */
}

/* --- КНОПКИ --- */
.buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    position: relative;
    height: 60px;
}

.btn {
    padding: 16px 32px;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
}

/* Главная кнопка (Да) */
.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 10px 20px -10px rgba(118, 75, 162, 0.5);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 25px -10px rgba(118, 75, 162, 0.8);
}

/* Второстепенная кнопка (Нет) */
.btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    color: #a0a0a0;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

/* Кнопка "Пройти заново" */
.btn-outline {
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: 30px;
}

.btn-outline:hover {
    background: rgba(255, 255, 255, 0.1);
}

#btn-no {
    position: relative;
    transition: 0.2s;
}

/* --- АНИМАЦИИ ТЕКСТА В СЮРПРИЗЕ --- */
.compliments {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.compliments p {
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.c1 { animation-delay: 0.2s; color: #00f2fe; }
.c2 { animation-delay: 0.8s; color: #ff0844; }
.c3 { animation-delay: 1.4s; color: #00ff87; }

@keyframes slideUp {
    to { opacity: 1; transform: translateY(0); }
}

/* --- ПАДАЮЩИЕ РОЗЫ (оставляем, но делаем их аккуратнее) --- */
.falling-rose {
    position: absolute;
    top: -50px;
    font-size: 24px;
    pointer-events: none;
    z-index: 100;
    animation: fallRose linear forwards;
    filter: drop-shadow(0 0 5px rgba(255,255,255,0.3));
}

@keyframes fallRose {
    to { transform: translateY(110vh) rotate(360deg); }
}
