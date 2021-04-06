let menu = document.querySelector('.menu')
let toggle = document.querySelector('.toggle')
let exit = document.querySelector('.exit')

toggle.addEventListener('click', () =>{
    menu.classList.toggle('showmenu')
})


window.addEventListener('scroll', () =>{
    let nav = document.querySelector('nav')
    nav.classList.toggle('sticky', window.scrollY > 0)
})