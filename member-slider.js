import './styles.css'

const buttonPrev = document.querySelector(".members-slider__button-prev");
const buttonNext = document.querySelector(".members-slider__button-next");
const membersList = document.querySelector(".members__list");
const membersItems = document.querySelectorAll(".members__item");
const slides = Array.from(membersItems);
const slider = document.querySelector(".members-slider");

let slideIndex = 0;
const slideCount = slides.length;

buttonPrev.addEventListener('click', showPreviousSlide);
stagesSliderButtonNext.addEventListener('click',showNextSlide);

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

