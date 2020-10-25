$(document).ready(function(){
	wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();

    /*click PC submenu*/
    $( ".menu > ul > li:nth-child(5)" ).click(function(e) {
    	e.preventDefault();
		$(this).toggleClass('show');
	});


	/*sp Menu*/
	$( ".bar" ).click(function() {
		$('.header-menu').toggleClass('active');
		$('.menu > ul').toggleClass('active');
	});
	$( ".menu li i" ).click(function() {
		$(this).parents().children(".menu ul li > .sub-menu").slideToggle(100);
    	$(this).toggleClass("active");
	});

	/*tit h2 run*/
		var text_effect = function() {
	    var offset = $(window).scrollTop() + $(window).height(),
	        $animatables = $('.title h2');
	    if ($animatables.length == 0) {
	        $(window).off('scroll', text_effect);
	    }
	    $animatables.each(function(i) {
	        var $animatable = $(this);
	        if (($animatable.offset().top + $animatable.height() - 20) < offset) {
	            $animatable.removeClass('animatable').addClass('animated');
	        }
	    });

	};
	$(window).on('scroll', text_effect);
	$(window).trigger('scroll'); /*end*/

	/* スクロール */
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    if(window.innerWidth >= 901){
        var position = target.offset().top -50;
        $('body,html').animate({scrollTop:position}, speed, 'swing');            
    }else{
        var position = target.offset().top - 70;
        $('body,html').animate({scrollTop:position}, speed, 'swing');  
    }
  })

   /*Min - height box -*/
  $('.ser-list').each(function(){  
      var highestBox = 0;
      $('.ser-inf .desc', this).each(function(){
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      });    
      $('.ser-inf .desc',this).height(highestBox);        
    });


  /*faq*/
    $( ".faq-title" ).click(function(e) {
        e.preventDefault();
      $(this).toggleClass('active');
    });

})

// faq
