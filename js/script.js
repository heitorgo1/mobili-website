
// On Load
$(function(){

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
	$('#logo-img').css('background',"url('../images/logo.png') no-repeat");
});

$('.portfolio').click(function(){
	loadContent(portfolioUrl);
	$('.portfolio').parent().addClass('active');
	$('#logo-img').css('background',"url('../images/logo_nofill.png') no-repeat");
});

$('.sobrenos').click(function(){
	loadContent(sobrenosUrl);
	$('.sobrenos').parent().addClass('active');
	$('#logo-img').css('background',"url('../images/logo_nofill.png') no-repeat");
});


})(window);
