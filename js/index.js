const hamburguer = document.getElementById('hamburguer')
const menu = document.getElementById('menu')
const close = document.getElementById('close')



hamburguer.addEventListener('click'  , ()=>{
    menu.classList.add('hero__menu--active')    
})

close.addEventListener('click' , ()=>{
    menu.classList.remove('hero__menu--active')
})