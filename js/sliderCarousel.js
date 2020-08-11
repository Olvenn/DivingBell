console.log("OK");
'use strict';


class SliderCarousel {

    constructor({
        wrap,
        slider,
        next,
        prev,
        heighItem = 150,
        heighPadding = 10,
        position = 0,
        slidersToShow = 2}) {

        this.wrap = document.querySelector(wrap);
        this.slider = document.querySelector(slider);
        this.slides = document.querySelector(slider).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidersToShow =  slidersToShow;
        this.heighItem = heighItem;
        this.heighPadding = heighPadding;

        this.options = {
            position,
            itemHeight: this.heighPadding + this.heighItem,
            slidesLength: this.slides.length - this.slidersToShow,
            heightSliders: this.heighItem * this.slidersToShow + (this.heighPadding * this.slidersToShow)
        }
    }

    init() {
        this.addMySliderClass();
        this.addMySliderStyle();


        if(this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        console.log(this.slides.length);
        console.log(this.options.heightSliders);
    }

    addMySliderClass() {
        this.wrap.classList.add("my-slider");
        this.slider.classList.add("my-slider__wrap");
        for (const item of this.slides) {
            item.classList.add("my-slider__item");
        }
    }

    addMySliderStyle() {
        console.log("addMySliderStyle");
        const style = document.createElement("style");
        style.id = "mySliderCarusel-style";
            style.textContent = `

                .photo__slider-wrap {
                    height: ${this.options.heightSliders}px;
                }
                .my-slider__wrap {
                    transition: transform 0.5s;
                    will-change: tranform;
                }
                .my-slider__item {
                    height: ${this.heighItem}px;
                }
                .my-slider__item:not(:last-child) {
                    margin-bottom: ${this.heighPadding}px;
                }

            `;
        document.head.appendChild(style);
    }

    controlSlider() {
        this.prev.addEventListener("click", this.prevSlider);
        this.next.addEventListener("click", this.nextSlider.bind(this));
    }

    setOpacityStyle() {
        if(this.options.position > this.options.slidesLength - 1) {
            this.prev.style.opacity = .2;
        } else {
            this.prev.style.opacity = 1;
        }

        if(this.options.position == 0) {
            this.next.style.opacity = .2;
        } else {
            this.next.style.opacity = 1;
        }

    }

    prevSlider = () => {
        console.log(this.slides.length);
        // this.setOpacityStyle();
        if(this.options.position < this.slides.length - this.slidersToShow) {
 
            ++this.options.position;
            console.log(this.options.position);

        let offset = this.options.itemHeight * this.options.position;

        this.slider.style.transform = `translateY(-${offset}px)`;
    }
    }

    nextSlider() {

        if(this.options.position > 0) {
        --this.options.position;
        let offset = this.options.itemHeight * this.options.position;
        this.slider.style.transform = `translateY(-${offset}px)`;

        console.log(this.options.position)
        }
    }


    addArrow() {

    }

}