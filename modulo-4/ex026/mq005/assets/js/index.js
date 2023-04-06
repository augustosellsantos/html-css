const menuBurger = document.querySelector('.menubruger')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')

menuBurger.addEventListener('click', (event) => {
    event.preventDefault()
    menu.classList.toggle('visibility')
    close.classList.toggle('visibility')
})