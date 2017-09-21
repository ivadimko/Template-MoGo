$(document).ready(function() {
	$('.nav-item__link').click(function(){
			var link = $(this).attr('href');
      $('html, body').animate({scrollTop:$(link).position().top}, 1000);
	});

	if ($(document).width() > 767) {
		if(!!('ontouchstart' in window)){//check for touch device
			$(".image--touch .image__overlay-content").css("display","none");
			$(".image--touch").click(function() {
				$(".image--touch .image__overlay-content").css("display","none");
				$(this).children(".image__overlay-content").fadeIn();
			});
		};
	};

	$(".spincrement").css("visibility","hidden")
	$(".spincrement--main").css("visibility","hidden")
	var waypoint = new Waypoint({
  		element: $("#numbers"),
		handler: function(direction) {
			$(".spincrement").css("visibility","visible")
			$(".spincrement--main").css("visibility","visible")
			$(".spincrement--main").spincrement({
				duration: 6000,
				complete: function() {$(".inline-item__heading").removeClass("spincrement--main")},
			});
			$(".spincrement").spincrement({
				duration: 2000,
				leeway: 50,
				complete: function() {$(".inline-item__heading").removeClass("spincrement")},
			});
		}, offset: 300
	});
		

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

	function runfirst(){
		showPane(0);
	    var item = $('.progress-bar__item-filler').eq(0);
	    item.width(0);
		item.animate({'width': "+=100%"}, time, run);
	}
	runfirst();
	
	function run(){
	    showPane(currentIndex+1);
	    var item = $('.progress-bar__item-filler').eq(currentIndex);
	    item.width(0);
		item.animate({'width': "+=100%"}, time, run);
	}



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
	
	$('.popup_c').magnificPopup();

	

});

jQuery(window).on('load', function () {
	mobileNav.init('.header__menu');
});
var mobileNav = {
	className: '.js_mobile-nav',
	mobileMenuClassName: '.mobile-nav__menu',
	activeClass: 'open',
	init: function (mainMenuClassName) {
		if (!$(this.mobileMenuClassName).children().length) {
			$(mainMenuClassName).children().clone().prependTo(this.mobileMenuClassName);
		}

		$(document).on('click', '.burger', function () {
			mobileNav.toggle();
		});
		$(document).on('click', '.mobile-nav__menu>li', function () {
			mobileNav.toggle();
		});
	},
	open: function () {
		$(this.className).addClass(this.activeClass);
	},
	close: function () {
		$(this.className).removeClass(this.activeClass);
	},
	toggle: function () {
		$(this.className).hasClass(this.activeClass) ? this.close() : this.open();
	}
};