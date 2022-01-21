(function($) {
	
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      var bannerHeight = $(".js--bannerScroll").outerHeight();

  
      if (scroll > (bannerHeight - 80)) {
          $(".header").addClass("new-header");
          $(".btn-text").addClass("new-btn-text");
          $(".logo-one-img").addClass("logo-white");
          $(".logo-two-img").removeClass("logo-gray");
          $(".header-mobile").addClass("new-header");
          $(".header-top > i").addClass("new-icon-mobile-u");
      } else {
          $(".header").removeClass("new-header");
          $(".btn-text").removeClass("new-btn-text");
          $(".logo-one-img").removeClass("logo-white");
          $(".logo-two-img").addClass("logo-gray");
          $(".header-mobile").removeClass("new-header");
          $(".header-top > i").removeClass("new-icon-mobile-u");
      }
  });
      
  })( jQuery );

  $(".accordion-button-u").click(function() {
    
    $("#collapseOne").toggleClass("overflow-u-text"); 

  })