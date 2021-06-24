/* TESTO CORSIVO */

  const testoSocrate = document.querySelector('.activate-socrate');
  observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
    anime({
      targets: '#testoCorsivoSocrate path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 80,
      begin: function() {
        var x = document.querySelectorAll('.testo-path');
        x.forEach(el => el.setAttribute("stroke", "#a1cae7"))},
      delay: function (el, i) { return i * 80 },
      loop: false
      })
      
           observer.unobserve(entry.target)
      } else {
      }
    })
    
  });


    observer.observe(testoSocrate);

