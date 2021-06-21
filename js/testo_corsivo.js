/* TESTO CORSIVO */

  const testoSocrate = document.querySelector('.activate-socrate');
  observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        
        var svgs = [
    { file: "media/hero/testoCorsivoSocrate.svg", container: ".hero-testo" }
  ];

    svgs.forEach(loadSVG);
  
  function loadSVG(svg) {
    
    var request = new XMLHttpRequest();
    request.open("GET", svg.file, true);
    request.onload = function() {
      
      if (request.status >= 200 && request.status < 400) {
        
        insert(svg, request.responseText);
      }
    };
    request.onerror = function() {
      // You got a problem
    };
    request.send();
  }

  function insert(svg, data) {
    
    var container = document.querySelector(svg.container);
    container.insertAdjacentHTML("beforeend", data);

    // if (++loaded === total) startAnimation();
    startAnimation()
  }

  function startAnimation(){
    anime({
      targets: '#testoCorsivoSocrate path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 200,
      delay: function (el, i) { return i * 200 },
      loop: false,
      complete: function(){
        document.querySelector('#testoCorsivoSocrate').style.animation = 'fill-opacity 1s linear forwards'
      }
      })}


           observer.unobserve(entry.target)
      } else {
      }
    })
    
  });

  observer.observe(testoSocrate);