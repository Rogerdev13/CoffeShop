const questionsElements = [...document.querySelectorAll('.questions__header')]
console.log(questionsElements)


for(let i = 0 ; i < questionsElements.length ; i++){
    questionsElements[i].addEventListener('click' , ()=>{
        let height = 0;
        let answer = questionsElements[i].nextElementSibling;
        let padding  = questionsElements[i].parentElement.parentElement;
        let icon = questionsElements[i].children[1];
        icon.classList.toggle('questions__icon--rotate')
        padding.classList.toggle('questions__padding--show')
        if(answer.clientHeight === 0 ){
            height += answer.scrollHeight;
        }

        answer.style.height = `${height}px`
    })
}