
// On Load
$(function(){
//	
//	var val = 0;
//	var previousScroll = 0;
//	$(document).scroll(function(){
//		console.log($('.fitness .container .tablet-cel').offset().top-$(document).scrollTop());
//		console.log($('.acqua .container .tablet-cel').offset().top-$(document).scrollTop());
//		console.log($('.acai .container .tablet-cel').offset().top-$(document).scrollTop());
//
//		var diff = $('.fitness .container .tablet-cel').offset().top-$(document).scrollTop();
//		var s = $(document).scrollTop();
//		if ((diff < 20 && diff > -20) && s > previousScroll) {
//			$('.fitness .container .tablet-cel').css('transition',"all 2s");
//			$('.fitness .container .tablet-cel').css('transform',"translate(0,"+100+"px)");
//		}
//		else if ((diff < 20 && diff > -20) && s < previousScroll) {	
//			$('.fitness .container .tablet-cel').css('transition',"all 2s");
//			$('.fitness .container .tablet-cel').css('transform',"translate(0,0)");
//		}
//		previousScroll = $(document).scrollTop();
//	});

	function isElementInViewport (el) {

		//special bonus for those using jQuery
		if (typeof jQuery === "function" && el instanceof jQuery) {
			el = el[0];
		}

		var rect = el.getBoundingClientRect();

		return (
				rect.top >= 0 &&
				rect.bottom-100 <= (window.innerHeight || document.documentElement.clientHeight)  /*or $(window).height() */
			   );
	}

	var elementTranslate = function(el) {
		console.log(isElementInViewport(el));
		if (isElementInViewport(el)) {
			if (el.css('transform') == "translateY(0)") return;
			el.css('transform',"translateY(0)");
		}else {
			if (el.css('transform') == "translateY(60px)") return;
			el.css('transform',"translateY(60px)");
		}
	}

	$(document).scroll(function(){
		elementTranslate($('.fitness .container .tablet-cel'));
		elementTranslate($('.acqua .container .tablet-cel'));
		elementTranslate($('.acai .container .tablet-cel'));	
	});
});


//IIFE

(function(global) {

//Snippets URL
var homeUrl = "snippets/home.html";
var portfolioUrl = "snippets/portfolio.html";
var sobrenosUrl = "snippets/sobrenos.html";


var insertHtml = function (selector, htmlText) {
	$(selector).html(htmlText);
};

var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img id='loader' src='images/loader.gif'></div>";
  insertHtml(selector, html);
};

var hideModal = function() {
	$("#modal-fullscreen").modal('hide');
}

var removeActive = function() {
	$('#links > ul > .active').removeClass('active');
}

var setLogo = function(url) {	
	$('#logo-img').css('background',"url('"+url+"') no-repeat");
	$('#logo-img').css('background-size',"contain");
}

var loadContent = function(url) {	
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(url, function(html){	
		insertHtml("#main-content", html);
	},false);
	hideModal();
	removeActive();
};


$(function(){
	loadContent(homeUrl);
});


$('.home').click(function(){
	loadContent(homeUrl);
	setLogo("images/logo.png");
});

$('.portfolio').click(function(){
	loadContent(portfolioUrl);
	$('.portfolio').parent().addClass('active');
	setLogo("images/nofill_logo.png");
});

$('.sobrenos').click(function(){
	loadContent(sobrenosUrl);
	$('.sobrenos').parent().addClass('active');
	setLogo("images/nofill_logo.png");
});


})(window);
