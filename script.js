

function createPost(number) {
    var streemDiv = document.getElementById("stream")

    streemDiv.innerHTML += `<div class="post"><def class="images"><img src="images/image${number}.jpg" alt="виконавець роботи"></def><def class="description"><div class="screen_shots"><img src="images/screenShot${number}.png" alt="скріншот гри"></div><div class="info"><div><h2>Заголовок</h2></div><div><p>Опис</p></div><div><a href="#"  class="black-button">сторінка гри</a><br></div></div></def></div>`
}


document.addEventListener('DOMContentLoaded', function() {
    for (var number = 0; number < 15; number++) {
        createPost(number);
    }
});