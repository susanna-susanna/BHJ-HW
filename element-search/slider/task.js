let slide = document.getElementsByClassName("slider__item");
let slidesArr = Array.from(slide);
//console.log(slidesArr);
//let nextSlide = document.getElementsByClassName("slider__arrow_next");
//let prevSlide = document.getElementsByClassName("slider__arrow_prev");
let nextSlide = document.querySelector(".slider__arrow_next");
let prevSlide = document.querySelector(".slider__arrow_prev");
let index = 0;

function switchSlide() {
    slidesArr[index].classList.remove("slider__item_active");
}

nextSlide.onclick = () => {
    switchSlide();
    /*index = (slidesArr.length + 1) % slidesArr.length;
    slidesArr[slidesArr.length - 1] = slide;
    slidesArr[index].classList.add("slider__item_active");*/
    right();
}  

prevSlide.onclick = () => {
    switchSlide();
    /*index = (index - 1) % slidesArr.length;
    slidesArr[index].classList.add("slider__item_active");*/
    left();
}  

function right() {
    index = (slidesArr.length + 1) % slidesArr.length;
    //slidesArr[slidesArr.length - 1] = slide;    
    slidesArr[index].classList.add("slider__item_active");
    
}

function left() {
    index = (slidesArr.length - 1) % slidesArr.length;
    slidesArr[index].classList.add("slider__item_active");
}