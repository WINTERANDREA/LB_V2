//Rotate footer icon


const footerIcon = document.querySelector('.circle');

observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      console.log('in the view');
      anime({
        targets: '.circle',
        translateX: 400,
        translateY:10,
        rotate: '1turn',
        delay: 300,
        duration: 8000,
      });
      observer.unobserve(entry.target);
    } else {
      console.log('out of view');
    }
  })
  
});

observer.observe(footerIcon);
