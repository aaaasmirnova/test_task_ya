import './styles.css'

// const stagesSliderButtonPrev = document.querySelector(".stages-slider__button-prev");
// const stagesSliderButtonNext = document.querySelector(".stages-slider__button-next");
// const stagesList = document.querySelector(".stages__list");
// const stagesSliderDot = document.querySelectorAll(".stages-slider__dot");
// const stagesItems = document.querySelectorAll(".stages__item");
// const slides = Array.from(stagesItems);
// const slider = document.querySelector(".stages-slider");

// let slideIndex = 0;
// const slideCount = slides.length;
//
// stagesSliderButtonPrev.addEventListener('click', showPreviousSlide);
// stagesSliderButtonNext.addEventListener('click',showNextSlide);
//
// // Функция для показа предыдущего слайда
// function showPreviousSlide() {
//     slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//     updateSlider();
// }
//
// // Функция для показа следующего слайда
// function showNextSlide() {
//     slideIndex = (slideIndex + 1) % slideCount;
//     updateSlider();
// }
//
// // Функция для обновления отображения слайдера
// function updateSlider() {
//     slides.forEach((slide, index) => {
//         if (index === slideIndex) {
//             slide.style.display = 'block';
//         } else {
//             slide.style.display = 'none';
//         }
//     });
// }
//
// // Инициализация слайдера
// updateSlider();

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

const buttonPrev = document.querySelector(".members-slider__button-prev");
const buttonNext = document.querySelector(".members-slider__button-next");
const membersList = document.querySelector(".members__list");
const membersItems = document.querySelectorAll(".members__item");
const slides = Array.from(membersItems);
const slider = document.querySelector(".members-slider");

let slideIndex = 0;
const slideCount = slides.length;

buttonPrev.addEventListener('click', showPreviousSlide);
buttonNext.addEventListener('click',showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Инициализация слайдера
updateSlider();




