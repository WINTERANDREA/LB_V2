/* SCHEDA 3 */

gsap.registerPlugin(ScrollTrigger);


gsap.from(".logo-sezione", {scrollTrigger: {trigger:".logo-sezione", start:"top 20%"}, duration: 1, y:-300, opacity:0})
gsap.from(".titolo-sezione", {scrollTrigger: {trigger:".titolo-sezione", start:"top 80%"}, duration: 1, y:200, opacity:0})
gsap.from(".paragrafo-1", {scrollTrigger: {trigger:".paragrafo-1", start:"top 80%"}, duration: 1, y:200, opacity:0})
gsap.from(".paragrafo-2", {scrollTrigger: {trigger:".paragrafo-2", start:"top 80%"}, duration: 1, y:200, opacity:0})
gsap.from(".btn-template", {scrollTrigger: {trigger:".btn-template", start:"top 80%"}, duration: 1, y:200, opacity:0})
gsap.from(".link-sito", {scrollTrigger: {trigger:".link-sito", start:"top 80%"}, duration: 1, y:200, opacity:0})
gsap.from("#referenze", {scrollTrigger: {trigger:"#referenze", start:"top center"}, duration: 2, x:-900, opacity:0, rotate: -10})


