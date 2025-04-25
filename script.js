// Получаем элементы модального окна
var modal = document.getElementById("myModal");
var btn = document.getElementById("rentButton");
var span = document.getElementsByClassName("close")[0];

// Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
   }
}

// Обработка кликов по кнопкам аренды
document.querySelectorAll('.rent-btn').forEach(button => {
    button.addEventListener('click', function() {
        const bikeName = this.getAttribute('data-bike-name');
        const bikePrice = this.getAttribute('data-bike-price');

        // Добавляем опцию в выпадающий список
        const bikeSelect = document.getElementById('bikeSelect');
        
        // Создаем новый элемент option
        const option = document.createElement('option');
        option.value = bikeName.toLowerCase().replace(/\s+/g, '-'); // Преобразуем имя в формат для value
        option.textContent = `${bikeName} - ${bikePrice} руб/час`;
        
        // Очищаем предыдущие опции и добавляем новую
        bikeSelect.innerHTML = ''; // Очищаем предыдущие опции
        bikeSelect.appendChild(option);

        // Открываем модальное окно
        modal.style.display = "block";
    });
});

// Обработка отправки формы аренды
document.getElementById('rentalForm').onsubmit = function(event) {
   event.preventDefault();
   alert('Заявка на аренду отправлена!');
   modal.style.display = "none"; // Закрыть модальное окно после отправки
}

// Обработка отправки формы обратной связи
document.getElementById('contactForm').onsubmit = function(event) {
   event.preventDefault();
   alert('Сообщение отправлено!');
}