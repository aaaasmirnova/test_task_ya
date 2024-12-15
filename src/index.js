import './styles.css'

// function addNumbers() {
//     const num1 = parseFloat(document.getElementById("number1").value);
//     const num2 = parseFloat(document.getElementById("number2").value);
//     const result = num1 + num2;
//     document.getElementById("result").innerText = `Result: ${result}`;
// }
//
// document.getElementById("calculate").addEventListener("click", addNumbers);

// const stagesSliderButtonPrev = document.querySelector(".stages-slider__button-prev");
// const stagesSliderButtonNext = document.querySelector(".stages-slider__button-next");
// const stagesList = document.querySelector(".stages__list");
// const stagesSliderDot = document.querySelectorAll(".stages-slider__dot");
// const stagesItems = document.querySelectorAll(".stages__item");
// const slider = document.querySelector(".stages-slider");
//
// let sliderCount = 0;
// let sliderWidth;
//
// //адаптивность слайдера
// window.addEventListener('resize', showSlide);
//
// //Кнопки перелистывания слайдов вперед и назад
// stagesSliderButtonNext.addEventListener('click', nextSlide);
// stagesSliderButtonPrev.addEventListener('click', prevSlide);
//
// //Задает нужную ширину картинки и sliderLine
// function showSlide() {
//     sliderWidth = slider.offsetWidth;
//     stagesList.style.width = sliderWidth * stagesItems.length;
//     stagesList.style.transform = `translateX()`
//     stagesItems.forEach(item => item.style.width = sliderWidth);
// }
// showSlide();
//
// //Перелистывает слайд вперед
// function nextSlide() {
//     sliderCount++;
//     if (sliderCount >= stagesItems.length) sliderCount = 0;
//
//     rollSlider();
//     thisSlide(sliderCount);
// }
//
// //Перелистывает слайд назад
// function prevSlide() {
//     sliderCount--;
//     if (sliderCount < 0) sliderCount = stagesItems.length - 1;
//
//     rollSlider();
//     thisSlide(sliderCount);
// }
//
// //задает шаг перемещения слайдов
// function rollSlider() {
//     stagesList.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
// }
//
// //Указывает как слайд по счету активен
// function thisSlide(index) {
//     stagesSliderDot.forEach(item => item.classList.remove('stages-slider__dot--active'));
//     stagesSliderDot[index].classList.add('stages-slider__dot--active');
// }
//
// //Вешаем клик на dot
//
// stagesSliderDot.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         sliderCount = index;
//         rollSlider();
//         thisSlide(sliderCount);
//     })
// })

const cardContainer = document.querySelector('.members__wrapper');
const cards = document.querySelectorAll('.members__item');
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    function nextCard() {
        if (currentIndex >= cards.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }

        // Перемещаем карточки с помощью трансформации
        cardContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(nextCard, 4000); // Перелистывание каждые 5 секунд
});


