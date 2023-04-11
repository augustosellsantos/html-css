const menuBurger = document.querySelector('.menubruger')
const menu = document.querySelector('.menu')
const close1 = document.querySelector('.close')

menuBurger.addEventListener('click', (event) => {
    event.preventDefault()
    menu.classList.toggle('visibility')
    close1.classList.toggle('visibility')
    menuBurger.classList.toggle('menuburger')
})