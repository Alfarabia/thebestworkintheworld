const prev = document.getElementById('btn-prev'),
     next = document.getElementById('btn-next'),
     slides = document.querySelectorAll('.slide'),
     dots = document.querySelectorAll('.dot');
let index = 0;
const activeSlide = n => {

    for(slide of slides){
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}
const activeDot = n => {
   console.log(n)
    for(dot of dots){
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}
const  prepareCorrentSlide = ind => {
    activeSlide(ind)
    activeDot(ind)
}
const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCorrentSlide(index)
    }
   else{
       index++;
       prepareCorrentSlide(index)
   }
}
const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1
        prepareCorrentSlide(index)
    }
   else{
       index--;
       prepareCorrentSlide(index)
   }
}
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);














