class Slideshow {
    constructor(sliderElem) {
        this.slides = sliderElem.querySelectorAll('.slides img');
        this.slideIndex = 0;
        this.intervalId = null;
        this.prevBtn = sliderElem.querySelector('.prev');
        this.nextBtn = sliderElem.querySelector('.next');
        this.showSlide(this.slideIndex);
        this.startAutoCycle();
        this.attachEvents();
    }

    showSlide(index) {
        if (index >= this.slides.length) {
            this.slideIndex = 0;
        } else if (index < 0) {
            this.slideIndex = this.slides.length - 1;
        } else {
            this.slideIndex = index;
        }
        this.slides.forEach(slide => {
            slide.classList.remove('displaySlide');
        });
        if (this.slides[this.slideIndex]) {
            this.slides[this.slideIndex].classList.add('displaySlide');
        }
    }

    nextSlide = () => {
        this.showSlide(this.slideIndex + 1);
    }

    prevSlide = () => {
        this.showSlide(this.slideIndex - 1);
    }

    startAutoCycle() {
        this.intervalId = setInterval(this.nextSlide, 5000);
    }

    attachEvents() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', this.prevSlide);
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', this.nextSlide);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slider').forEach(sliderElem => {
        new Slideshow(sliderElem);
    });
});
