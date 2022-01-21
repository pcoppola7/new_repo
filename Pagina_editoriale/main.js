(function($) {
	
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      var bannerHeight = $(".js--bannerScroll").outerHeight();

  
      if (scroll > bannerHeight) {
          $(".header").addClass("new-header");
          $(".btn-text").addClass("new-btn-text");
          $(".logo img").addClass("new-img");
          $(".header-mobile").addClass("new-header");
          $(".header-top > i").addClass("new-icon-mobile-u");
      } else {
          $(".header").removeClass("new-header");
          $(".btn-text").removeClass("new-btn-text");
          $(".logo img").removeClass("new-img");
          $(".header-mobile").removeClass("new-header");
          $(".header-top > i").removeClass("new-icon-mobile-u");
      }
  });
      
  })( jQuery );