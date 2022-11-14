
$( () => {

	// On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		// windowTop > 150 ? $('.header').addClass('header-shadow') : $('.header').removeClass('header-shadow');
		// windowTop > 150 ? $('.logoName').addClass('logoName-scroll') : $('.logoName').removeClass('logoName-scroll');
        // windowTop > 150 ? $('.nav-link').addClass('nav-link-scroll') : $('.nav-link').removeClass('nav-link-scroll');
        // windowTop > 150 ? $('.contacts').addClass('contacts-scroll') : $('.contacts').removeClass('contacts-scroll');
        windowTop > 250 ? $('#top-second').addClass('top-second-open') : $('#top-second').removeClass('top-second-open');
	});
	
	//Click Logo To Scroll To Top
	$('#top, #top-second').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},100);
	});
	

    // smooth scroll
    $('a.nav-menu-link').click(function(){
        var _href = $(this).attr('href')
        $('html, body').animate({scrollTop: $(_href).offset().top + 'px'}, {
            duration: 500,
            easing: 'swing'
        })
    })

    // mobile menu
    $('.menu-button').click(function(){
        $('.nav').addClass('is-active');
        $('.menu-close').addClass('is-active');
        // $('body').css('overflow','hidden');
    });

    $('.menu-close').click(function(){
        $('.nav').removeClass('is-active');
        $('.menu-close').removeClass('is-active');
        // $('body').css('overflow','auto');

    });

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
        
    // fancybox customisation
    $('[data-fancybox]').fancybox({
        buttons: [
        "zoom",
        //"share",
    //   "slideShow",
    //   "fullScreen",
    //   "download",
    //   "thumbs",
        "close"
    ],
    //   protect: true,
    //   preventCaptionOverlap: true,
    });

});
