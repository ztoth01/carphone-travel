$( document ).ready(function() {
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

  var init = function () {
	  initLazyLoad();
	  initSmoothScroll();
	  initHamburgerChangeOnScroll();
	  initElementInView();
	  initPopover();
	  initMobileHeroCTAFix();
	  initMapAreaFocus();
	  initNavImgUpdate();
  }
  
  
  // START - Init Lazy Load
	// ==================================
	var initLazyLoad = function () {
		$('.lazy').Lazy({
			effect: "fadeIn",
      effectTime: 500,
      threshold: 500,
      afterLoad: function(element) {
        element.removeClass('lazy-preloader');
      }
		});
	}
	// END - Init Lazy Load
	// ==================================
	
	
	
	// START - Init Smooth Scroll To DIV
	// ==================================
	var initSmoothScroll = function () {
		// handle links with @href started with '#' only
		$(document).on('click', 'a[href^="#"].smooth-scroll', function(e) {
		    // target element id
		    var id = $(this).attr('href');
		
		    // target element
		    var $id = $(id);
		    if ($id.length === 0) {
		        return;
		    }
		
		    // prevent standard hash navigation (avoid blinking in IE)
		    e.preventDefault();
		    
		    var offset = 0;
		    if (parseInt($(this).data('offset')))
					offset = parseInt($(this).data('offset'));
		
		    // top position relative to the document
		    var pos = $id.offset().top + offset;
		
		    // animated top scrolling
		    $('body, html').animate({scrollTop: pos}, 250);
		});
	}
	// END - Init Smooth Scroll To DIV
	// ==================================
	
	
	
	
	// START - Init Hamburger Change on Scroll
	// ==================================
	var initHamburgerChangeOnScroll = function () {
		var myEfficientFn = debounce(function() {
			var scroll = $(window).scrollTop();
	    var heroHeight = $('.hero').height();

	    if (scroll >= heroHeight-25) {
		    $('.hamburger').fadeOut(250);
				$('#navbarMenu').collapse('hide');
	    } else {
		    $('.hamburger').fadeIn(250);
	    }
		}, 10);
		
		
		$(window).scroll(myEfficientFn).trigger('scroll');
	}
	// END - Init Hamburger Change on Scroll
	// ==================================
	
	
	
	
	
	// START - Element in view
	// ==================================
	var elementScrolled = function(elem, offset) {
		var docViewTop = $(window).scrollTop() + offset;
		var docViewBottom = docViewTop + $(window).height();
		var elemTop = elem.offset().top;
		return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
	}
    
	var initElementInView = function () {
		$(window).scroll(function () {
			$('.element-in-view').each(function () {
				var self = $(this);
				if (!self.hasClass('element-in-view--show')) {
					if (elementScrolled(self, -($(window).height()/5))) {
						self.addClass('element-in-view--show');
						
						if (self.hasClass('map__blue-popup')) {
							setTimeout(function () {
								self.addClass('map__blue-popup--trigger-anim');
							}, 1500);
							
						}
					}
				}
			})
		});
	}
	// END - Element in view
	// ==================================
	
	
	
	
	// START - Navigation Image Update
	// ==================================
	var initNavImgUpdate = function () {
		var img = $('.header-nav__img');
		var originalImageSrc = img.data('src');
		img.css({'background-image': 'url('+ originalImageSrc +')'})
			
		$('.header-nav-list .nav-link').on('mouseover', function () {
			var imgName = $(this).data('name');
			img.css({'background-image': 'url(assets/media/nav/nav-'+ imgName +'.png)'})
		})
		
		$('.header-nav-list .nav-link').on('mouseout', function () {
			img.css({'background-image': 'url('+ originalImageSrc +')'})
		})
	}
	// END - Navigation Image Update
	// ==================================
	
	
	
	// START - Mobile Hero CTA Next Fixation
	// ==================================
	var initMobileHeroCTAFix = function () {
		var myEfficientFn = debounce(function() {
			var addThis = $('.at-share-dock-outer.addthis-smartlayers:not(.at4-visually-hidden)');
			var addThisDock = $('.at-share-dock');
			var heroCTA = $('.hero__cta-next');
			var scrollTop = $(window).scrollTop();

			if (addThis.hasClass('addthis-smartlayers-mobile')) {
				if ($(window).height() + scrollTop <= $('.hero').height() + addThisDock.height()) {
					heroCTA.addClass('hero__cta-next--fixed');
					$()
				} else {
					heroCTA.removeClass('hero__cta-next--fixed');
				}
			}
		}, 10);
		
		
		$(window).resize(myEfficientFn).trigger('resize');
		$(window).scroll(myEfficientFn).trigger('scroll');
		
		setTimeout(function () {
			myEfficientFn();
		}, 1000);
	}
	// END - Mobile Hero CTA Next Fixation
	// ==================================
	
	
	
	
	// START - Init Map Area Focus
	// ==================================
	var initMapAreaFocus = function () {
		var map = $('.map-section .map');
		map.scrollLeft(250);
		map.scrollTop(150);
	}
	// END - Init Map Area Focus
	// ==================================
	
	
	
	
	// START - Init Popover
	// ==================================
 
	var initPopover = function () {
		$('[data-toggle="popover"]').popover({
			html: true,
			trigger: 'focus',
			container: '.map-section__map-area-wrapper',
			content: function () {
				var type = $(this).data('type');
				var imgUrl = $(this).data('image');
				var locationTitle = $(this).data('location-title');
				var description = $(this).data('description');
				
				return '<div class="popover-loc-icon popover-loc-icon--' + type +'"></div><div class="popover-loc-image" style="background-image: url('+ imgUrl + ');"></div><div class="popover-loc-body"><h4 class="popover-loc-title">' + locationTitle +'</h4> <p class="popover-loc-desc">'+ description +'</p></div>';
			}
		})
		.on('shown.bs.popover', function () {
			$('.map__blue-popup-wrapper').fadeOut(250);
			$('.map__overlay').fadeIn(250);
			
		})
		.on('hidden.bs.popover', function () {
			$('.map__overlay').fadeOut(250);
			$('.map__blue-popup-wrapper').fadeIn(250);
		})
	}
	// END - Init Popover
	// ==================================
  
  init();

});
