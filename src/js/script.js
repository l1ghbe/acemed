gsap.from('.main__description', {
    scale: 0,
    opacity: 0,
    duration: 1,
    delayease: "power2.in",
    delay: 0.5,
})

gsap.from('#main-btn', {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "bounce.out",
})
gsap.from('.logo', {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "back.out(1.7)",
})
gsap.from('.header-menu__item', {
    y: -50,
    opacity: 0,
    stagger: 0.2,
    delay: 1
})

gsap.from('.about-title', {
    scrollTrigger: {
        trigger: '.about-title',
        start: "top 100%",
    },
    opacity: 0,
    x: '10%',
    scrub: 1,
    duration: 1.2,

})
gsap.from('.equipment-main-title', {
    scrollTrigger: {
        trigger: '.equipment-main-title',
        start: "top 100%",
    },
    opacity: 0,
    x: '-10%',
    scrub: 1,
    duration: 1.2,

})
gsap.from('.about-description', {
    scrollTrigger: {
        trigger: '.about-description',
        start: "top 100%",
    },
    scale: 0,
    duration: 1,
})
gsap.from('.equipment-img', {
    scrollTrigger: {
        trigger: '.equipment-img',
        start: "center 100%",
    },
    scale: 0,
    duration: 1,
})
gsap.from('.equipment-title', {
    scrollTrigger: {
        trigger: '.equipment-title',
        start: "center 100%",
    },
    x: '10%',
    opacity: 0,
    duration: 1,
})
gsap.from('.equipment-description', {
    scrollTrigger: {
        trigger: '.equipment-description',
        start: "center 100%",
    },
    x: '10%',
    opacity: 0,
    duration: 1,
    delay: 0.2
})
gsap.from('.equipment-plus', {
    scrollTrigger: {
        trigger: '.equipment-plus',
        start: "center 100%",
    },
    x: '10%',
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    delay: 0.5
})
gsap.from('.equipment-btns', {
    scrollTrigger: {
        trigger: '.equipment-btns',
        start: "center 100%",
    },
    y: '50%',
    opacity: 0,
    duration: 1,
    delay: 0.8
})


