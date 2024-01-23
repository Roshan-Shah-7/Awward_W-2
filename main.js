gsap.from('.left h2', {
    opacity: 0,
    x: 15,
    duration: .5,
    delay: 1
})
gsap.from('.right h2', {
    opacity: 0,
    x: -15,
    duration: .5,
    delay: 1.5
})

gsap.to('.txt h2', {
    y: 20,
    delay: 2.5,
    opacity:-1
})

gsap.to('#pre_load',{
    y:-100,
    height:-100,
    delay:3,
    duration:1.5,
    opactiy:0
})