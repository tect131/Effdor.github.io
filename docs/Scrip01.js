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
