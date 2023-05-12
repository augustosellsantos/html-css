const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const close1 = document.querySelector('.close')
const menuBurger = document.querySelector('.menuburger')

burger.addEventListener('click', (event) => {
    event.preventDefault()
    menu.classList.toggle('visibility')
    close1.classList.toggle('visibility')
    menuBurger.classList.toggle('visibility')
    burger.classList.toggle('burger')
})