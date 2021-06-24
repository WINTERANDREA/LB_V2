tl = new TimelineMax({ paused: true });

			tl.to(".menu-left", 1, {
				left: 0,
				ease: Expo.easeInOut,
			});

			tl.to(
				".menu-right",
				1,
				{
					right: 0,
					ease: Expo.easeInOut,
				},
				"-=1"
			);

			tl.staggerFrom(
				".menu-links > div",
				0.8,
				{
					y: 100,
					opacity: 0,
					ease: Expo.easeOut,
				},
				"0.1",
				"-=0.4"
			);

			tl.staggerFrom(
				".mail > div, .lavora > div, .socials > div, .footer-privacy-menu > *",
				0.8,
				{
					y: 100,
					opacity: 0,
					ease: Expo.easeOut,
				},
				"0.1",
				"-=1"
			);

			tl.from(
				".menu-close",
				1,
				{
					scale: 0,
					opacity: 1,
					ease: Expo.easeInOut,
				},
				"-=1"
			);

			tl.to(
				".hr",
				0.4,
				{
					scaleY: 1,
					transformOrigin: "0% 50%",
					ease: Power2.ease,
				},
				"-=2"
			);

			tl.reverse();
      document.getElementById('menu-open').addEventListener("click", function(){
        tl.reversed(!tl.reversed());
      })

      document.getElementById('menu-close').addEventListener("click", function(){
        tl.reversed(!tl.reversed());
      })

			document.getElementById('getPrivacy').addEventListener("click", function(){
        tl.reversed(!tl.reversed());
				getPrivacy()
      })

			document.getElementById('getLegal').addEventListener("click", function(){
        tl.reversed(!tl.reversed());
				getLegal()
      })



//this is the button
    var acc = document.getElementsByClassName("acc-block");
    var i;

    for (i = 0; i < acc.length; i++) {
      //when one of the buttons are clicked run this function
      acc[i].onclick = function () {
        //variables
        var panel = this.nextElementSibling;
        var coursePanel = document.getElementsByClassName("panel");
        var courseAccordion = document.getElementsByClassName("acc-block");
        var courseAccordionActive = document.getElementsByClassName("acc-block active");

        /*if pannel is already open - minimize*/
        if (panel.style.maxHeight) {
          //minifies current pannel if already open
          panel.style.maxHeight = null;
          //removes the 'active' class as toggle didnt work on browsers minus chrome
          this.classList.remove("active");
        } else { //pannel isnt open...
          //goes through the buttons and removes the 'active' css (+ and -)
          for (var ii = 0; ii < courseAccordionActive.length; ii++) {
            courseAccordionActive[ii].classList.remove("active");
          }
          //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
          for (var iii = 0; iii < coursePanel.length; iii++) {
            this.classList.remove("active");
            coursePanel[iii].style.maxHeight = null;
          }
          //opens the specified pannel
          panel.style.maxHeight = panel.scrollHeight + "px";
          //adds the 'active' addition to the css.
          this.classList.add("active");
        }
      }//closing to the acc onclick function
    }//closing to the for loop.