// JavaScript Document

$(function() {
/*
	$('a[href^="#"],a[href*="#"]').on('click',function() {

		var mrg = $("#head").outerHeight() + 10;

		var href = $(this).attr("href");
		var hrefs=href.substring(href.indexOf("#")+1,href.length);
		href = "#"+hrefs;

		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - mrg;
		$('body,html').animate({scrollTop:position}, 500, 'swing');
		return false;

   });
*/
	$('.p-form__detailopen').on('click',function(e) {
		e.preventDefault();
		$('.p-form__jobsearch').addClass('is-active');
		$('body').addClass('is-active');
	});
	$('.p-form__jobsearch__close').on('click',function() {
		$('.p-form__jobsearch').removeClass('is-active');
		$('.p-form__jobsearch__title').removeClass('is-active');
		$('body').removeClass('is-active');
		$('.p-form__jobsearch__title + .p-form__jobsearch__item').removeAttr('style');
	});
	
	$('.p-offer__detail__company').on('click',function() {
		$(this).next('.p-offer__detail__details').slideToggle(300);
	});
	$('.p-offer__detail .c-btn__modalclose').on('click',function() {
		$(this).parents('.p-offer__detail').find('.p-offer__detail__details').slideToggle(300);
	});
	
	$('.p-form__jobsearch__title').on('click',function() {
		$(this).toggleClass('is-active');
		$(this).next('.p-form__jobsearch__item').slideToggle(300);
	});
});


$(window).on('load',function(){

});

$(window).on('resize',function () {

});

$(window).on('scroll',function () {
	
});

$(window).on('orientationchange', function(){

});