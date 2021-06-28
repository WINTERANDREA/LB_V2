let tl = gsap.timeline({scrollTrigger:{
  trigger:".about-testo",
  start:"top bottom",
}})
.from(".about-testo", {y:150, opacity:0, duration:2})
.from(".btn-about", { opacity:0, y:150, duration:1})


/* SCHEDE */

gsap.registerPlugin(ScrollTrigger);

gsap.from("#cloud", {scrollTrigger: {trigger:"#cloud",  start:"top 70%"}, duration: 1, x:-700, y:200, opacity:0, rotate: -10})

gsap.from("#partner", {scrollTrigger: {trigger:"#partner", start:"top 50%"}, duration: 1, x:700, opacity:0, rotate: 10})

gsap.from("#referenze", {scrollTrigger: {trigger:"#referenze", start:"top 50%"}, duration: 1, x:-900, opacity:0, rotate: -10})


