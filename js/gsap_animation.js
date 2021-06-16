let tl = gsap.timeline({scrollTrigger:{
  trigger:".about-testo",
  start:"top bottom",
}})
.from(".about-testo", {y:300, opacity:0, duration:2})
.from(".btn-about", { opacity:0.2, delay:1.5, scale: 0, ease:"back", duration:3})


/* SCHEDE */

gsap.registerPlugin(ScrollTrigger);

gsap.from("#cloud", {scrollTrigger: {trigger:"#cloud",  start:"top bottom"}, duration: 3, x:-2100, y:600, opacity:0, rotate: -40})

gsap.from("#partner", {scrollTrigger: {trigger:"#partner", start:"top 50%"}, duration: 3, x:2100, opacity:0, rotate: 20})

gsap.from("#referenze", {scrollTrigger: {trigger:"#referenze", start:"top center"}, duration: 3, x:-1900, opacity:0, rotate: -20})


