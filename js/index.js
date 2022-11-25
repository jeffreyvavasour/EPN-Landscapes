// selectors
const primaryHeader = document.querySelector('.primary-header');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

const btnSliderLeft = document.querySelector('.btn-slider-left');
const btnSliderRight = document.querySelector('.btn-slider-right');
const reviewsContentSlides = document.querySelectorAll('.reviews-content-slide');

const topOfPage = document.querySelector('.top-of-page');

// EVENT LISTENERS
// nav toggle
mobileNavToggle.addEventListener('click', function(e) {
    if (!mobileNavToggle.classList.contains('change')) {
        mobileNavToggle.classList.add('change');
        primaryNav.setAttribute('data-visible', 'true');
        mobileNavToggle.style.position = 'fixed';
        e.stopPropagation();
    } else {
        mobileNavToggle.classList.remove('change');
        primaryNav.setAttribute('data-visible', 'false');
        mobileNavToggle.style.position = 'absolute';
        e.stopPropagation();
    }
})

document.addEventListener('click', (e) => {
    if (e.target.id !== 'primary-nav' && e.target.id !== 'nav-toggle' && e.target.id !== 'btn-top-of-page') {
        primaryNav.setAttribute('data-visible', 'false');
        mobileNavToggle.classList.remove('change');
        mobileNavToggle.style.position = 'absolute';
    };
});

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if (scrolled > 300) {
        topOfPage.style.display = 'grid';
    }
    if (scrolled < 300) {
        topOfPage.style.display = 'none';
    } 
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