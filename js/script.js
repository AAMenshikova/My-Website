// Обработчик кликов по ссылкам меню
document.querySelectorAll(".menu-element__link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();  // Отменяем стандартное поведение ссылки

        // Убираем класс активности с предыдущего выбранного пункта
        document.querySelectorAll(".menu-element__link").forEach(item => {
            item.classList.remove("active");
        });

        // Добавляем класс активности к выбранному элементу
        this.classList.add("active");

        // Прокручиваем к соответствующему разделу
        const linkHref = this.getAttribute("href");
        const targetElement = document.querySelector(linkHref);

        if (targetElement) {  // [ИСПРАВЛЕНО] - Добавлена проверка на существование элемента
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Функция для обновления активности в зависимости от текущей прокрутки
function updateActiveSection() {
    document.querySelectorAll(".menu-element__link").forEach(link => {
        const linkHref = link.getAttribute("href");
        const targetElement = document.querySelector(linkHref);
        const rect = targetElement.getBoundingClientRect();

        // Проверка, находится ли раздел в видимой части экрана
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            // Если раздел виден, добавляем класс активности
            link.classList.add("active");
        } else {
            // Если не виден, удаляем класс активности
            link.classList.remove("active");
        }
    });
}

// Слушаем прокрутку страницы
window.addEventListener("scroll", updateActiveSection);

// Вызываем сразу после загрузки страницы, чтобы правильно отобразить активный элемент
updateActiveSection();


document.querySelectorAll(".skills-list__element").forEach(skill => {
    skill.addEventListener("click", function() {
        // Получаем описание навыка из атрибута data-description
        const description = this.getAttribute("data-description");

        // Находим элемент для отображения описания
        const skillCard = document.querySelector(".skill-card");

        // Обновляем содержимое карточки с описанием
        skillCard.querySelector(".skill-card__name").textContent = this.querySelector(".skills-list__title").textContent;
        skillCard.querySelector(".skill-card__description").textContent = description;
    });
});


