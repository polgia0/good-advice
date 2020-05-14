jQuery.noConflict();
(function($) {
  $(function() {

		// Initialize FitVids (applied only to videos that appear in posts & pages)
		$( '.entry-content' ).fitVids();

		//Mobile Navigation
		$( '.nav-toggle, .close-nav' ).click(function(e) {
			
			e.preventDefault();

			$( 'body' ).toggleClass( 'show-nav' );
		});	

		// Flexslider 
		$ (document).ready(function($){
			$(window).load(function(){
				$('.flexslider').flexslider({
			    animation : 'fade',
			    controlNav : true,
			    smoothHeight: true,
			    start: visible()
				});
			});

			function visible() {
				$('.flexslider-wrapper').css('display', 'block'); 
			}

			$('.site-content').css('visibility', 'visible'); 
				 
		});

		// Sticky header on scroll

		function shrinkHeader() {

			if ($(window).width() > 960) {

		  	var headerHeight = $('.site-header').height();  	

		  	$('body').css('margin-top', headerHeight);	 

			  $(window).scroll(function () {
				  if ($(document).scrollTop() >= headerHeight) {
				    $('.site-header').addClass('tiny');
				  } else {
				  	$('.site-header').removeClass('tiny');
				  }
				});
			} else {
				$('body').css('margin-top', 0);	 
			}
		}

		shrinkHeader();

	  $(window).bind('resize', shrinkHeader);

  });

})(jQuery);