$( document ).ready(function() {
   
	$("#theCarousel").carousel({
		pause: 'hover'
	});
	

});

// scroll to top of page function

		$(document).ready(function() {
		    $('a[href=#top]').click(function(){
		        $('html, body').animate({scrollTop:0}, 'slow');
		        return false;
		    });
		})

		$(document).ready(function () {

		    // $(window).scroll(function () {
		    //     if ($(this).scrollTop() > 100) {
		    //         $('.scrollup').fadeIn();
		    //     } else {
		    //         $('.scrollup').fadeOut();
		    //     }
		    // });

		    $('.scrollup').click(function () {
		        $("html, body").animate({
		            scrollTop: 0
		        }, 600);
		        return false;
		    });

		});