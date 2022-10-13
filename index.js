// selectors
const primaryHeader = document.querySelector('.primary-header');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

const btnSliderLeft = document.querySelector('.btn-slider-left');
const btnSliderRight = document.querySelector('.btn-slider-right');
const reviewsContentSlides = document.querySelectorAll('.reviews-content-slide');

// EVENT LISTENERS
// nav toggle
mobileNavToggle.addEventListener('click', function() {
    const dataVisible = primaryNav.getAttribute('data-visible');
    if (dataVisible === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        mobileNavToggle.style.backgroundImage = 'url(./assets/images/icon-close.svg)';
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        mobileNavToggle.style.backgroundImage = 'url(./assets/images/icon-hamburger.svg)';
    }
})

document.addEventListener('click', (e) => {
    if (e.target.id !== 'primary-nav' && e.target.id !== 'nav-toggle' && e.target.id !== 'btn-top-of-page') {
        primaryNav.setAttribute('data-visible', 'false');
        mobileNavToggle.style.backgroundImage = 'url(./assets/images/icon-hamburger.svg)';
    };
});

// review slides
reviewsContentSlides.forEach((slide, index) => {
    slide.style.left = `${index}00%`;
})

// reviews slider
let count = 0;

btnSliderRight.addEventListener('click', function() {
    count++;
    carousel()
})
btnSliderLeft.addEventListener('click', function() {
    count--;
    carousel()
})

// FUNCTIONS
function carousel() {
    if(count >= reviewsContentSlides.length) {
        count = 0;
    }
    if(count <= -1) {
        count = reviewsContentSlides.length - 1;
    }
    reviewsContentSlides.forEach(slide => {
        slide.style.transform = `translateX(-${count}00%)`;
    })
}