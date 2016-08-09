(function($) {
"use strict";

/* ==============================================
ANIMATION -->
=============================================== */

    new WOW({
	    boxClass:     'wow',      // default
	    animateClass: 'animated', // default
	    offset:       0,          // default
	    mobile:       true,       // default
	    live:         true        // default
    }).init();
    
/* ==============================================
    Progress Bar (Skills Bar)
=============================================== */

$('.progress .progress-bar').progressbar({transition_delay: 800});

/* ==============================================
FUN -->
=============================================== */

function count($this){
	var current = parseInt($this.html(), 10);
	current = current + 10;
		$this.html(++current);
			if(current > $this.data('count')){
		$this.html($this.data('count'));
		} 
		else {    
			setTimeout(function(){count($this)}, 10);
		}
		}        
		$(".stat-count").each(function() {
			$(this).data('count', parseInt($(this).html(), 10));
		$(this).html('0');
	count($(this));
});
    
/* ==============================================
BACK TOP -->
=============================================== */

    jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 1) {
    jQuery('.backtotop').css({bottom:"auto"});
    } else {
    jQuery('.backtotop').css({bottom:"auto"});
    }
    });
    jQuery('.backtotop').click(function(){
    jQuery('html, body').animate({scrollTop: '0px'}, 800);
    return false;
    });
/* ==============================================
MENU HOVER -->
=============================================== */

$('.dropdown').hover(function() {
$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
}, function() {
$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});


/* ==============================================
SEARCH -->
=============================================== */

	var $ctsearch = $( '#dmsearch' ),
		$ctsearchinput = $ctsearch.find('input.dmsearch-input'),
		$body = $('html,body'),
		openSearch = function() {
			$ctsearch.data('open',true).addClass('dmsearch-open');
			$ctsearchinput.focus();
			return false;
		},
		closeSearch = function() {
			$ctsearch.data('open',false).removeClass('dmsearch-open');
		};

	$ctsearchinput.on('click',function(e) { e.stopPropagation(); $ctsearch.data('open',true); });

	$ctsearch.on('click',function(e) {
		e.stopPropagation();
		if( !$ctsearch.data('open') ) {

			openSearch();

			$body.off( 'click' ).on( 'click', function(e) {
				closeSearch();
			} );

		}
		else {
			if( $ctsearchinput.val() === '' ) {
				closeSearch();
				return false;
			}
		}
	});
	
	$('#header').affix({
		offset: {
		top: $('#header').height() }
	});	


/* ==============================================
    Tooltip
=============================================== */

    $('[data-toggle="tooltip"]').tooltip();

	$(function() {
	  $('#header a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

/* ---------------------------------------------
WINDOWS HEIGHT JS -->
 --------------------------------------------- */
	$(".js-height-full").height($(window).height());
		$(".js-height-parent").each(function(){
		$(this).height($(this).parent().first().height());
	});

/* ==============================================
    Loader Effect
=============================================== */

    $(window).load(function() {
        $("#preloader").delay(500).fadeOut();
        $(".preloader").delay(600).fadeOut("slow");
    });

})(jQuery);