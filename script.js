var imageCounter = 1;

// Функція для клонування div і додавання його до div з id "stream"
function cloneDivAndAppendToStream() {
    // Отримуємо посилання на елемент, який ми хочемо клонувати
    var originalDiv = document.getElementById('originalDiv');

    // Перевіряємо, чи елемент існує
    if (originalDiv) {
        // Клонуємо оригінальний div
        var clonedDiv = originalDiv.cloneNode(true);
        
        // Отримуємо посилання на додатковий div з класом "images" у клонованому div
        var imagesDiv = clonedDiv.querySelector('.images');
        
        // Перевіряємо, чи елемент imagesDiv існує
        if (imagesDiv) {
            // Отримуємо всі зображення в imagesDiv
            var images = imagesDiv.querySelectorAll('img');

            // Отримуємо лічильник зображень, щоб змінювати шляхи відповідно

            // Ітеруємося по кожному зображенню і змінюємо його src на нове зображення
            images.forEach(function(image) {
                // Припустимо, що ваші зображення мають імена image1.jpg, image2.jpg, і т. д.
                var newImageSrc = 'images/image' + imageCounter + '.jpg';
                image.setAttribute('src', newImageSrc);

                // Збільшуємо лічильник зображень для наступного зображення
                imageCounter++;
            });
            
            // Отримуємо посилання на div з id "stream"
            var streamDiv = document.getElementById('stream');
            
            // Перевіряємо, чи елемент streamDiv існує
            if (streamDiv) {
                // Додаємо клонований div до div з id "stream"
                streamDiv.appendChild(clonedDiv);
            } else {
                console.error("Елемент з id 'stream' не знайдено.");
            }
        } else {
            console.error("Елемент з класом 'images' в клонованому div не знайдено.");
        }
    } else {
        console.error("Елемент з id 'originalDiv' не знайдено.");
    }
}

// Чекаємо, коли DOM повністю завантажено
document.addEventListener('DOMContentLoaded', function() {
    // Клонуємо div 5 разів та додаємо його до div з id "stream"
    for (var i = 0; i < 4; i++) {
        cloneDivAndAppendToStream();
    }
});