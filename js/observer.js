const element = document.getElementById('article')
const question1 = document.getElementById('question1')
const question2 = document.getElementById('question2')
const question3 = document.getElementById('question3')

const sliderConta = document.getElementById('slider')
const first = document.getElementById('first')

const linkMenu = document.getElementById('linkMenu')
const hero__link = [...document.querySelectorAll('.hero__link')]
console.log(hero__link)


const cargarElement = (o , e )=>{
   
    o.forEach(element => {
        if(element.isIntersecting){
   
            element.target.classList.add('show')

        }
    });
}





const sapo = new IntersectionObserver(cargarElement , {
    root:null,
    rootMargin: '0px 0px 0px 0px' ,
    threshold : 1.0
});





sapo.observe(element)
sapo.observe(question1)
sapo.observe(question2)
sapo.observe(question3)

sapo.observe(slider)




