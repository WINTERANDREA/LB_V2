/* LOAD BRAIN SVG */ 
 var svgs = [
    { file: "media/hero/cervello-animato.svg", container: ".hero-brain" }
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

    };
    request.send();
  }

  function insert(svg, data) {
    
    
    var container = document.querySelector(svg.container);
    container.insertAdjacentHTML("afterbegin", data);
    
    startAnimation()
    
  }
  
  
  function startAnimation(){
    /* Lefh line path */
    var path1sx = anime.path('#Linea_1_SX');
    var path2sx = anime.path('#Linea_2_SX');
    var path3sx = anime.path('#Linea_3_SX');
    var path4sx = anime.path('#Linea_4_SX');
    var path5sx = anime.path('#Linea_5_SX');
    var path6sx = anime.path('#Linea_6_SX');
    var path7sx = anime.path('#Linea_7_SX');
    var path8sx = anime.path('#Linea_8_SX');
    var path9sx = anime.path('#Linea_9_SX');
    var path10sx = anime.path('#Linea_10_SX');
    var path11sx = anime.path('#Linea_11_SX');
    var path12sx = anime.path('#Linea_12_SX');
    var path13sx = anime.path('#Linea_13_SX');
    var path14sx = anime.path('#Linea_14_SX');
    var path15sx = anime.path('#Linea_15_SX');
    var path16sx = anime.path('#Linea_16_SX');
    var path17sx = anime.path('#Linea_17_SX');

    /* Right line path */
    var path1dx = anime.path('#Linea_1_DX');
    var path2dx = anime.path('#Linea_2_DX');
    var path3dx = anime.path('#Linea_3_DX');
    var path4dx = anime.path('#Linea_4_DX');
    var path5dx = anime.path('#Linea_5_DX');
    var path6dx = anime.path('#Linea_6_DX');
    var path7dx = anime.path('#Linea_7_DX');
    var path8dx = anime.path('#Linea_8_DX');
    var path9dx = anime.path('#Linea_9_DX');
    var path10dx = anime.path('#Linea_10_DX');
    var path11dx = anime.path('#Linea_11_DX');
    var path12dx = anime.path('#Linea_12_DX');
    var path13dx = anime.path('#Linea_13_DX');
    var path14dx = anime.path('#Linea_14_DX');
    var path15dx = anime.path('#Linea_15_DX');
    var path16dx = anime.path('#Linea_16_DX');
    var path17dx = anime.path('#Linea_17_DX');

    setTimeout(function(){ 
      
// anime({
//       targets: '#pallino_1sx',
//       opacity: 0,
//       width: 200,
//       easing: 'easeInCirc',
//       duration: 3000,
//       complete: function(anim) {
//         console.log(anim)
//   }
// });
      
      anime({
      targets: '#electron_1sx',
      translateX: path1sx('x'),
      translateY: path1sx('y'),
      rotate: path1sx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      
      easing: 'easeInCirc',
      duration: 5000,
      
      complete: function(anim) {
       document.querySelector('#electron_1sx').style.animation = 'fadeOut 1s linear forwards'
  }
});


anime({
      targets: '#electron_3sx',
      translateX: path3sx('x'),
      translateY: path3sx('y'),
      rotate: path3sx('angle'),
      opacity: 1,
      scale: 1,
      duration: 4000,
      easing: 'easeInCirc',
      complete: function(anim) {
        document.querySelector('#electron_3sx').style.animation = 'fadeOut 1s linear forwards'
  }
});

anime({
      targets: '#electron_5sx',
      translateX: path5sx('x'),
      translateY: path5sx('y'),
      rotate: path5sx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 2000,
      easing: 'easeInCirc',
      complete: function(anim) {
       document.querySelector('#electron_5sx').style.animation = 'fadeOut 1s linear forwards'
  }
});

anime({
      targets: '#electron_6sx',
      translateX: path6sx('x'),
      translateY: path6sx('y'),
      rotate: path6sx('angle'),
      opacity: 1,
      scale: 1,
      duration: 2000,
      easing: 'easeInCirc',
      complete: function(anim) {
       document.querySelector('#electron_6sx').style.animation = 'fadeOut 1s linear forwards'
  }
});

anime({
      targets: '#electron_7sx',
      translateX: path7sx('x'),
      translateY: path7sx('y'),
      rotate: path7sx('angle'),
      opacity: 1,
      scale: 1,
        direction: 'reverse',
      duration: 5000,
      easing: 'easeInCirc',
      complete: function(anim) {
       document.querySelector('#electron_7sx').style.animation = 'fadeOut 1s linear forwards'
  }
});

anime({
      targets: '#electron_10sx',
      translateX: path10sx('x'),
      translateY: path10sx('y'),
      rotate: path10sx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 5000,
      easing: 'easeInCirc',
      complete: function(anim) {
       document.querySelector('#electron_10sx').style.animation = 'fadeOut 1s linear forwards'
  }
});

anime({
      targets: '#electron_11sx',
      translateX: path11sx('x'),
      translateY: path11sx('y'),
      rotate: path11sx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 4000,
      easing: 'easeInCirc',
      complete: function(anim) {
       document.querySelector('#electron_11sx').style.animation = 'fadeOut 1s linear forwards'
  }
});

anime({
      targets: '#electron_12sx',
      translateX: path12sx('x'),
      translateY: path12sx('y'),
      rotate: path12sx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 3000,
      easing: 'easeInCirc',
      complete: function(anim) {
       document.querySelector('#electron_12sx').style.animation = 'fadeOut 1s linear forwards'
  }
});

anime({
      targets: '#electron_13sx',
      translateX: path13sx('x'),
      translateY: path13sx('y'),
      rotate: path13sx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 3000,
      easing: 'easeInCirc',
      complete: function(anim) {
       document.querySelector('#electron_13sx').style.animation = 'fadeOut 1s linear forwards'
  }
});

anime({
      targets: '#electron_15sx',
      translateX: path15sx('x'),
      translateY: path15sx('y'),
      rotate: path15sx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 2000,
      easing: 'easeInCirc',
      complete: function(anim) {
       document.querySelector('#electron_15sx').style.animation = 'fadeOut 1s linear forwards'
  }
});

anime({
      targets: '#electron_17sx',
      translateX: path17sx('x'),
      translateY: path17sx('y'),
      rotate: path17sx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 5000,
      easing: 'easeInCirc',
      complete: function(anim) {
       document.querySelector('#electron_17sx').style.animation = 'fadeOut 1s linear forwards'
  }
});
 
anime({
      targets: '#electron_1dx',
      translateX: path1dx('x'),
      translateY: path1dx('y'),
      rotate: path1dx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 3000,
      easing: 'easeInCirc',
      complete: function(anim) {
          document.querySelector('#electron_1dx').style.animation = 'fadeOut 1s linear forwards'
  }
});

anime({
      targets: '#electron_2dx',
      translateX: path2dx('x'),
      translateY: path2dx('y'),
      rotate: path2dx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 3000,
      easing: 'easeInCirc',
      complete: function(anim) {
        document.querySelector('#electron_2dx').style.animation = 'fadeOut 1s linear forwards'
  }
});


anime({
      targets: '#electron_4dx',
      translateX: path4dx('x'),
      translateY: path4dx('y'),
      rotate: path4dx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 4000,
      easing: 'easeInCirc',
      complete: function(anim) {
        document.querySelector('#electron_4dx').style.animation = 'fadeOut 1s linear forwards'
  }
});

anime({
      targets: '#electron_6dx',
      translateX: path6dx('x'),
      translateY: path6dx('y'),
      rotate: path6dx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 6000,
      easing: 'easeInCirc',
      complete: function(anim) {
        document.querySelector('#electron_6dx').style.animation = 'fadeOut 1s linear forwards'
  }
  });

  anime({
      targets: '#electron_7dx',
      translateX: path7dx('x'),
      translateY: path7dx('y'),
      rotate: path7dx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 7000,
      easing: 'easeInCirc',
      complete: function(anim) {
        document.querySelector('#electron_7dx').style.animation = 'fadeOut 1s linear forwards'
  }
});

  anime({
      targets: '#electron_10dx',
      translateX: path10dx('x'),
      translateY: path10dx('y'),
      rotate: path10dx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 1000,
      easing: 'easeInCirc',
      complete: function(anim) {
        document.querySelector('#electron_10dx').style.animation = 'fadeOut 1s linear forwards'
  }
});

  anime({
      targets: '#electron_12dx',
      translateX: path12dx('x'),
      translateY: path12dx('y'),
      rotate: path12dx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 6000,
      easing: 'easeInCirc',
      complete: function(anim) {
        document.querySelector('#electron_12dx').style.animation = 'fadeOut 1s linear forwards'
  }
});

  anime({
      targets: '#electron_13dx',
      translateX: path13dx('x'),
      translateY: path13dx('y'),
      rotate: path13dx('angle'),
      opacity: 1,
      scale: 1,
      direction: 'reverse',
      duration: 3000,
      easing: 'easeInCirc',
      complete: function(anim) {
        document.querySelector('#electron_13dx').style.animation = 'fadeOut 1s linear forwards'
  }
});


  anime({
      targets: '#electron_15dx',
      translateX: path15dx('x'),
      translateY: path15dx('y'),
      rotate: path15dx('angle'),
      opacity: 1,
      scale: 1,
      duration: 5000,
      easing: 'easeInCirc',
      complete: function(anim) {
        document.querySelector('#electron_15dx').style.animation = 'fadeOut 1s linear forwards'
  }
});

anime({
      targets: '#electron_16dx',
      translateX: path16dx('x'),
      translateY: path16dx('y'),
      rotate: path16dx('angle'),
      opacity: 1,
      scale: 1,
      duration: 2000,
      direction: 'reverse',
      easing: 'easeInCirc',
      complete: function(anim) {
        document.querySelector('#electron_16dx').style.animation = 'fadeOut 1s linear forwards'
  }
});

 },100);
  }

