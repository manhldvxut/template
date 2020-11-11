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

})

// faq

/*customer video*/
var plugin_url = "https://plugins.svn.wordpress.org/play-pause-button-for-video/trunk";
jQuery(document).ready(function() {
    if (jQuery("video").length > 0) {
        jQuery("video").wrap("<div class='video-parent-class'></div>");
        /*Add image just before to vedio  */
        jQuery("<img class='pause-play-img' src='" + plugin_url + "/img/img01.png' >").insertBefore("video");
        jQuery("video").each(function(index) {
            /*vedio parent div height width code*/
            var vedio_width = jQuery(this).width();
            var vedio_height = jQuery(this).height();
            jQuery(".video-parent-class").css({
                "width": vedio_width + "px",
                "height": vedio_height + "px"
            });

            /*Pause Play image, middle width in vedio code*/
            var half_width_vedio = vedio_width / 2;
            var middle_object_width = half_width_vedio - 32;
            jQuery(".pause-play-img").css({
                "left": middle_object_width + "px"
            });

            /*Pause Play image middle height in vedio code*/
            var half_height_vedio = vedio_height / 2;
            var middle_object_heigh = half_height_vedio - 32;
            jQuery(".pause-play-img").css({
                "top": middle_object_heigh + "px"
            });

            /*Pause play and image src change code*/
            jQuery(this).on("click", function() {
                if (this.paused) {
                    this.play();
                    jQuery(this).prev().attr("src", plugin_url + "/img/img02.png");
                } else {
                    this.pause();
                    jQuery(this).prev().attr("src", plugin_url + "/img/img01.png");
                }


            });


            /*pause play image click vedio on off functionlity code*/
            jQuery(this).prev().on("click", function() {
                var myVideo = jQuery(this).next()[0];
                if (myVideo.paused) {

                    myVideo.play();
                    jQuery(this).attr("src", plugin_url + "/img/img02.png");
                } else {

                    myVideo.pause();
                    jQuery(this).attr("src", plugin_url + "/img/img01.png");
                }

            });
            /*Floating js for HTML Video Start*/
            var windows = jQuery(window);
            var videoWrap = jQuery(this).parent();
            var video = jQuery(this);
            var videoHeight = video.outerHeight();
            var videoElement = video.get(0);
            windows.on('scroll', function() {
                var windowScrollTop = windows.scrollTop();
                var videoBottom = videoHeight + videoWrap.offset().top;
                //alert(videoBottom);

                if ((windowScrollTop > videoBottom)) {
                    if (!videoElement.paused) {
                        videoWrap.height(videoHeight);
                        video.addClass('stuck');
                        if (video.hasClass('stuck')) {
                            video.attr("controls", "1");
                        }
                        video.prev().attr("src", plugin_url + "/img/img02.png");
                        jQuery(".scrolldown").css({
                            "display": "none"
                        });
                    } else {
                        videoWrap.height('auto');
                        video.removeClass('stuck');
                        video.removeAttr('controls');
                        if (videoElement.paused) {
                            video.prev().attr("src", plugin_url + "/img/img01.png");
                        }
                    }

                } else {
                    videoWrap.height('auto');
                    video.removeClass('stuck');
                    video.removeAttr('controls');
                }

            });
            /*Floating js for HTML Video End*/
        });
        /*After end vedio change image*/
    }

    /** hover add class*/
    $(".js-hover").hover(
      function () {
        $(this).addClass('is-over');
      }, 
      function () {
        $(this).removeClass("is-over");
      }
    );
    /*scroll add class*/

     $(window).scroll(function() {
    // Scroll slide up out
      $('.js-scroll-item').each(function() {
        let elemPos = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
          $(this).addClass('is-shown');
        }
      });
    });

     /*menu-right*/
     $( ".inview" ).click(function() {
        $(this).toggleClass("open");
        $("#gNavi").toggleClass("open");
    });

     
});

 function sendData() {
    var link;
    
    if($('#defaultCheck1').prop("checked") == true){
        innerHtml="google.com";
        link = innerHtml;
        window.open("https://www.w3schools.com");
        return true;
   }
   if($('#defaultCheck2').prop("checked") == true){
        innerHtml="ping.com";
        link = innerHtml;
        return true;
   }
   else{
         return false;
    }
}