//register the plugin (just once)
//gsap.registerPlugin(MotionPathPlugin);

//gsap.to("#linkedin-2", {duration:5, motionPath:"#footer-svg2"}

gsap.registerPlugin(ScrollTrigger);

gsap.from("#cloud", {scrollTrigger: {trigger:"#cloud",  start:"top bottom"}, duration: 3, x:-2100, y:600, opacity:0, rotate: -40})

gsap.from("#partner", {scrollTrigger: {trigger:"#partner", start:"top 50%"}, duration: 3, x:2100, opacity:0, rotate: 20})

gsap.from("#referenze", {scrollTrigger: {trigger:"#referenze", start:"top center"}, duration: 3, x:-1900, opacity:0, rotate: -20})
