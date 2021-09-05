$(function () {
    "use strict";
//    $(window).scroll(function (){
//      var navbar= $(".navbar")
//      if($(window).scrollTop() >= navbar.height()){
//        navbar.addClass("scrolled")
//      }else{
//        navbar.removeClass("scrolled")
//      }
//    });
    // deal with tabs
    $(".tabs li").click(function(){
      //add class selected to active link
      $(this).addClass("selected").siblings().removeClass("selected");
      // hide all div
      $(".tabs .content > div").hide();
      //show div connected with link
      $("." + $(this).data("class")).show()
    });
});



var navbar = document.querySelector(".navbar");
window.onscroll = function(){
	
	if(window.scrollY >= navbar.offsetHeight){
		 navbar.classList.add("scrolled")
	}else{
        navbar.classList.remove("scrolled")
      }
};

//console.log(window.scrollY);








// ***  code ===> if navbar is not positioned start page 

/*
$(function() {
	"use strict";
  var header = $("header"),
			navbar = $(".navbar");
	$(window).scroll(function() {
		if ( $(window).scrollTop() >= header.height() ? navbar.addClass("scrolled navbar-fixed-top") : navbar.removeClass("scrolled navbar-fixed-top"));
	});	
  
});
*/















