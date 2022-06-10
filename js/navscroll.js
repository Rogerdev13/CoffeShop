const buttonUp = document.getElementById('buttonUp')

window.addEventListener('scroll' , ()=>{
    buttonUp.classList.toggle('btn_up--active' , window.scrollY > 0 )
})