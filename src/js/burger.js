const burger = () => {
    const burger = document.querySelector('.menu-burger');
    const menu = document.querySelector('.header-menu');
    const menuLinks = document.querySelectorAll('.header-menu__item');

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
     
}
burger()
