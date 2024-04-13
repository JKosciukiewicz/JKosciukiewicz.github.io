let emailLink = document.querySelector('#email-link')
let hideText=document.querySelector('#hide-text')
emailLink.addEventListener('click', (ev)=>{
    ev.preventDefault()
    if(hideText.classList.contains('hide')){
        hideText.classList.remove('hide')
    }
    else {
        hideText.classList.add('hide')
    }
})

hideText.addEventListener('click',(ev)=>{
    navigator.clipboard.writeText(ev.target.innerText)
    hideText.querySelector('img').src="./assets/icons/accept.png"
})