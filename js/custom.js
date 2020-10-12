$(function ($) {

	//gallery slider start
	$('.gallery_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		prevArrow: '<i class="fas fa-chevron-left b-left"></i>',
		nextArrow: '<i class="fas fa-chevron-right b-right"></i>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
    		},

			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
    		},

			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    		}

  		]
	});
	//gallery slider end


	//banner bottom start
	$('.footer_btn').click(function () {


		$('html,body').animate({

			scrollTop: 0

		}, 1000);


	});
	//banner bottom end


	//Menu Fixed start

	$nav = $('.header').offset().top;
	$nav = $nav + 5;

	$(window).scroll(function () {


		$scrolling = $(this).scrollTop();

		if ($scrolling >= $nav) {

			$('.header').addClass('fixedmenu');

		} else {

			$('.header').removeClass('fixedmenu');
		}


	});
	//Menu Fixed End




	//Smooth Scroll start
	$('.header a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function () {
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							return false;
						} else {
							$target.attr('tabindex', '-1');
							$target.focus();
						};
					});
				}
			}
		});
	//Smooth SCroll End

});
