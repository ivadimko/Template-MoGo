$(function() {
	$(".tabs__image").eq(0).addClass("active");
	$(".tab").eq(0).addClass("active");
	$(".tab__text").eq(0).css("display","block");
	
	$(".tab__head").click(function() {
		if ($(this).closest(".tab").hasClass("active") != true) {
			$(".tab").removeClass("active");
			$(this).closest(".tab").addClass("active");
			$(".tab__text").slideUp();
			$(this).next(".tab__text").slideDown();
			$(".tabs__image").removeClass("active");
			$(".tabs__image").hide().eq($(this).closest(".tab").index()).fadeIn();
			$(".tabs__image").eq($(this).closest(".tab").index()).addClass("active");
			
		}
			else {
				$(".tab").removeClass("active");
				$(".tab__text").slideUp();
			}
			

	});

	$(".spincrement").spincrement();

	var currentIndex = 0;// store current pane index displayed
	var ePanes = $('.hd-slider__panel'), // store panes collection
    time   = 5000,
    bar = $('.hd-slider__progress-bar');

function showPane(index){// generic showPane
    // hide current pane
    ePanes.eq(currentIndex).stop(true, true).fadeOut();
    // set current index : check in panes collection length
    currentIndex = index;
    if(currentIndex < 0) currentIndex = ePanes.length-1;
    else if(currentIndex >= ePanes.length) currentIndex = 0;
    // display pane
    ePanes.eq(currentIndex).stop(true, true).fadeIn();
    // menu selection
    $('.hd-slider-nav__item').removeClass('current').eq(currentIndex).addClass('current');
    $('.progress-bar__item').removeClass('current').eq(currentIndex).addClass('current');
}

showPane(0);

function run(){
    showPane(currentIndex+1);
    var item = $('.progress-bar__item-filler').eq(currentIndex);
    item.width(0);
    item.animate({'width': "+=100%"}, time, run);
}

run();

$(".owl-carousel").owlCarousel({
		loop: true,
		navText: "",
		autoHeight:true,
		responsive : {
			0 : {
				items : 1,
				nav : false
			},
			480 : {
				items : 1,
				nav : true
			}
		}
	});

	$(".nav-trigger").click(function() {
		// open primary navigation on mobile
		$(this).toggleClass("on");
		$(".cd-primary-nav").slideToggle();

	});

	$('.popup_c').magnificPopup();

	$.stellar({
		responsive: true,

	});


});
