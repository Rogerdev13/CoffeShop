const btnNext = document.getElementById('next')
const btnPrev = document.getElementById('prev')
const sliderElements = [...document.querySelectorAll('.slider__content')]
const sliderContainer = document.querySelector('.slider__indicators')

let index



const changeSlider = (v) =>{
    let currentSlider = document.querySelector('.slider__content--show').dataset.id
    index = Number(currentSlider)
    index += v
  
    sliderElements[Number(currentSlider)  - 1].classList.remove('slider__content--show')
    indicators[Number(currentSlider)  - 1].classList.remove('slider__indicator--active')
    if(index === 0 || index === sliderElements.length + 1 ){
        index = index === 0 ? sliderElements.length : 1;
    }

    sliderElements[index - 1].classList.add('slider__content--show')
    indicators[index - 1].classList.add('slider__indicator--active')
}

// CREAMOS LOS INDICADORES
for(let i = 1  ; i <= sliderElements.length ; i++){
    let element = document.createElement('div')
    element.className = 'slider__indicator'  
    sliderContainer.appendChild(element)
}

const indicators = [...document.querySelectorAll('.slider__indicator')]
console.log(indicators)
indicators[0].classList.add('slider__indicator--active')

for(let i= 0 ; i < indicators.length ; i++){

    indicators[i].addEventListener('click' , ()=>{
        let currentSlider = document.querySelector('.slider__content--show').dataset.id
        currentSlider = Number(currentSlider)
        console.log(currentSlider)
        sliderElements[currentSlider - 1].classList.remove('slider__content--show')
        sliderElements[i].classList.add('slider__content--show')
        indicators[i].classList.add('slider__indicator--active')

        indicators[currentSlider - 1].classList.remove('slider__indicator--active')
    })
   
}

btnNext.addEventListener('click' , ()=>{
    changeSlider(1)
})

btnPrev.addEventListener('click' , ()=>{
    changeSlider(-1)
})