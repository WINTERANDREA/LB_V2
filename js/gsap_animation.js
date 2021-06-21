let tl = gsap.timeline({scrollTrigger:{
  trigger:".about-testo",
  start:"top bottom",
}})
.from(".about-testo", {y:400, opacity:0, duration:2})
.from(".btn-about", { opacity:0.2, scale: 0, ease:"back", duration:1})


/* SCHEDE */

gsap.registerPlugin(ScrollTrigger);

gsap.from("#cloud", {scrollTrigger: {trigger:"#cloud",  start:"top bottom"}, duration: 3, x:-700, y:200, opacity:0, rotate: -10})

gsap.from("#partner", {scrollTrigger: {trigger:"#partner", start:"top center"}, duration: 3, x:700, opacity:0, rotate: 10})

gsap.from("#referenze", {scrollTrigger: {trigger:"#referenze", start:"top center"}, duration: 3, x:-900, opacity:0, rotate: -10})


