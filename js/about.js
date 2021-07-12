 gsap.registerPlugin(ScrollTrigger);

    gsap.from(".titolo-sezione", { scrollTrigger: { trigger: ".titolo-sezione", start: "top 80%" }, duration: 1, x: -200, opacity: 0 })
    gsap.from(".sottotitolo-sezione", { scrollTrigger: { trigger: ".sottotitolo-sezione", start: "top 80%" }, duration: 1, x: -250, opacity: 0 })
    // gsap.from(".card", { scrollTrigger: { trigger: ".card", start: "top 80%" }, duration: 1, y: 200, opacity: 0 })
    // gsap.from(".card__title-box", { scrollTrigger: { trigger: ".card__title-box", start: "top 80%" }, duration: 1, scale: 1.3, opacity: 0 })
    // gsap.from(".card__title-img", { scrollTrigger: { trigger: ".card__title-box", start: "top 80%" }, duration: 1, scale: 0, opacity: 0 })
    // gsap.from(".card__title", { scrollTrigger: { trigger: ".card__title-box", start: "top 80%" }, duration: 1, y: 200, opacity: 0 })
    gsap.from("#referenze", { scrollTrigger: { trigger: "#referenze", start: "top 50%" }, duration: 1, x: -900, opacity: 0, rotate: -10 })


    var n = [1, 2, 3, 4, 5, 6]
    n.forEach(el => gsap.from("#card-" + el, { scrollTrigger: { trigger: "#card-" + el, start: "top 80%" }, duration: 1, y: 200, opacity: 0 }))
