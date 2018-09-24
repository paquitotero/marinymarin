class Slider {
    constructor(currentSlide, slides) {
        this.slides = slides;
        this.currentSlide = currentSlide;
    }

    next() {
        this.slides[this.currentSlide].classList.toggle('visible');
        if (this.currentSlide < this.slides.length - 1) {
            this.currentSlide += 1;
        } else {
            this.currentSlide = 0;
        }
        this.slides[this.currentSlide].classList.toggle('visible');
    }

    prev() {
        this.slides[this.currentSlide].classList.toggle('visible');
        if (this.currentSlide > 0) {
            this.currentSlide -= 1;
        } else {
            this.currentSlide = this.slides.length - 1;
        }
        this.slides[this.currentSlide].classList.toggle('visible');
    }
}
