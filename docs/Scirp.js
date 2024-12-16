function createSpark(x, y) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;

    // Добавляем случайные параметры для анимации
    const angle = Math.random() * 360; // Случайный угол
    const distance = Math.random() * 100 + 50; // Случайное расстояние
    const duration = Math.random() * 0.5 + 0.5; // Случайная продолжительность анимации

    // Устанавливаем CSS переменные для анимации
    spark.style.setProperty('--random-x', `${Math.cos(angle) * distance}px`);
    spark.style.setProperty('--random-y', `${Math.sin(angle) * distance}px`);
    spark.style.setProperty('--duration', `${duration}s`);

    // Добавляем искры в контейнер с изображением
    document.querySelector('.content').appendChild(spark);

    // Удаляем искры через 1.5 секунды после появления
    setTimeout(() => {
        spark.remove();
    }, 1500);
}

// Добавляем событие на клик по изображению
document.getElementById('image').addEventListener('click', (e) => {
    const imageContainer = e.target.parentElement;
    const rect = imageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Создаем несколько искр при каждом клике
    for (let i = 0; i < 30; i++) {
        createSpark(x, y);
    }
});

function toggleAnswer(element) {
    const otvet = element.nextElementSibling;
    
    if (otvet.classList.contains('open')) {
        otvet.classList.remove('open');
    } else {
        otvet.classList.add('open');
    }
}
setInterval(() => {
    const icon = document.querySelector('.Ds1');
    icon.style.animation = 'none';  // Сброс анимации
    void icon.offsetWidth;  // Перезапуск анимации
    icon.style.animation = 'shakeBottom 0.5s ease-in-out';  // Применение анимации заново
}, 5000);
  
// Проверка ширины экрана и обработка нажатия на бургер
function toggleIcons() {
    if (window.innerWidth <= 990) {
        const socialIcons = document.querySelectorAll('.fab');
        
        // Скрываем иконки по умолчанию
        socialIcons.forEach(icon => {
            icon.style.opacity = '0';
            icon.style.transition = 'opacity 0.5s ease-in-out'; // Плавное появление
        });

        // Добавляем обработчик события клика на бургер
        document.querySelector('.navbar-toggler').addEventListener('click', () => {
            if (socialIcons[0].style.opacity === '0') {
                // Показываем иконки с задержкой
                setTimeout(() => {
                    socialIcons.forEach(icon => {
                        icon.style.opacity = '1';
                    });
                }, 500); // Задержка 1 секунда
            } else {
                // Скрываем иконки при закрытии
                socialIcons.forEach(icon => {
                    icon.style.opacity = '0';
                });
            }
        });
    }
}

// Запуск функции при загрузке страницы и изменении размера окна
window.addEventListener('load', toggleIcons);
window.addEventListener('resize', toggleIcons);

  

