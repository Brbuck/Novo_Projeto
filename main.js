let menu = document.querySelector('.menu')
let toggle = document.querySelector('.toggle')
let exit = document.querySelector('.exit')

toggle.addEventListener('click', () =>{
    menu.classList.add('showmenu')
    exit.classList.add('showexit')
    toggle.classList.add('none')
})

exit.addEventListener('click', () =>{
    menu.classList.remove('showmenu')
    exit.classList.remove('showexit')
    toggle.classList.remove('none')
})


window.addEventListener('scroll', () =>{
    let nav = document.querySelector('nav')
    nav.classList.toggle('sticky', window.scrollY > 0)
})