console.log("OK");
'use strict';

class SliderCarousel {

    constructor({
        wrap,
        slider,
        next,
        prev,
        position = 0}) {
        this.wrap = document.querySelector(wrap);
        this.slider = document.querySelector(slider);
        this.slides = document.querySelector(slider).children;
        this.options = {
            position =  position
        }
    }

    init() {
        this.addMySliderClass();
        this.addMySliderStyle();
        console.log(this.slides);
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
                .my-slider__wrap {
                    transition: transform 0.5s;
                    will-change: tranform;
                }
            `;
        document.head.appendChild(style);
    }

}