
// window.onresize = resizeWidth;
// function resizeWidth(){
//   console.log(window.screen.width)
//   let screenWidth = window.screen.width
//   if(screenWidth > 1500){
//     translateX = 400
//   }
//   console.log(translateX)
// }

var translateX;
function setTranslateX(){
  console.log(window.screen.width)
  let screenWidth = window.screen.width
  if(screenWidth > 1400){
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
        console.log('in the view');
        anime({
          targets: '.circle',
          translateX: translateX,
          translateY:10,
          rotate: '1turn',
          delay: 1500,
          opacity: 1,
          duration: 10000})
          observer.unobserve(entry.target)
      } else {
        console.log('out of view');
      }
    })
    
  });

  observer.observe(footerIcon);
    });

