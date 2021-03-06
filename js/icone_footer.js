var translateX;
function setTranslateX(){
  let screenWidth = window.screen.width
  if(screenWidth > 2400){
    translateX = 800
  } else if(screenWidth > 1900) {
    translateX = 600
  } else if(screenWidth > 1400) {
    translateX = 400
  } else if(screenWidth > 1150) {
    translateX = 300
  } else if(screenWidth > 576) {
    translateX = 200
  }
  else if(screenWidth > 300) {
    translateX = 150
  }
  else{
    translateX = 0;
  }
}


window.addEventListener('load', (event) => {
  setTranslateX()

  const footerIcon = document.querySelector('.circle');
  observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        anime({
          targets: '.circle',
          translateX: translateX,
          translateY:10,
          rotate: '1turn',
          delay: 500,
          opacity: 1,
          duration: 10000})
          observer.unobserve(entry.target)
      } else {
      }
    })
    
  });

  observer.observe(footerIcon);
    });

// window.onresize = resizeWidth;
// function resizeWidth(){
//   console.log(window.screen.width)
//   let screenWidth = window.screen.width
//   if(screenWidth > 1500){
//     translateX = 400
//   }
//   console.log(translateX)
// }
