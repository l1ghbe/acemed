const burger = () => {
    const burger = document.querySelector('.menu-burger');
    const menu = document.querySelector('.header-menu');
    const menuLinks = document.querySelectorAll('.header-menu__item');
    const navLinks = document.querySelectorAll('.header-menu__link');
    const contactsBtn = document.getElementById('contacts-btn')
    const aboutBtn = document.getElementById('about-btn')
    const mainBtn = document.getElementById('main-btn')
    const eqBtn = document.getElementById('equipment-btn')
    // const contacts = document.getElementById('contacts')
    const about = document.getElementById('about')
    const equipment = document.getElementById('equipment')



    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        if (burger.classList.contains('active')) {
            document.body.style.overflow = 'hidden'
            menu.classList.add('active')
            menuLinks.forEach(link => {
                link.classList.add('active')
            })
        } else {
            document.body.removeAttribute('style')
            menu.classList.remove('active')
            menuLinks.forEach(link => {
                link.classList.remove('active')
            })
        }
    })

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.removeAttribute('style')
            menu.classList.remove('active')
            menuLinks.forEach(link => {
                link.classList.remove('active')
            })
            burger.classList.remove('active')
        } )
    })


    eqBtn.addEventListener('click', () => {
        equipment.scrollIntoView(true)
    })
    mainBtn.addEventListener('click', () => {
        window.scrollBy(0, document.body.offsetHeight)
    })
    aboutBtn.addEventListener('click', () => {
        about.scrollIntoView(false)
    })

    contactsBtn.addEventListener('click', () => {
        window.scrollBy(0, document.body.offsetHeight)
    })
     
}
burger()
