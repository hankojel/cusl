// JavaScript Document

/********************************************************************************************************
 * 전역 함수모음
*********************************************************************************************************/

function controller(){
	var winWidth = $(window).width();
	if ( winWidth > 1217 ) {

		/****************************
		 * PC 화면 이벤트
		 ****************************/

		/********** bootstrap customize Modal **********/
		$('.modal').bind('hidden.bs.modal', function () {
		  $("html").css("margin-right", "0px");
		});
		$('.modal').bind('show.bs.modal', function () {
		  $("html").css("margin-right", "-15px");
		});

	}else{

		/****************************
		 * MOBILE 화면 이벤트
		 ****************************/



	}
};



$(document).ready(function(){

	/* =======================================================
	  Default Setting
	=========================================================== */

	/********** 페이지 로딩 **********/
	document.getElementById('loading_page').style.display="none";
	document.getElementById('wrapper').style.display="";

	/********** cycle-slideshow **********/
	var $slideshow = $(".cycle-slideshow");
	var $figures = $slideshow.find(".slide");
	var length = $figures.length;


		$('#adv-custom-pager a').eq(0);

		$('#adv-custom-pager a').eq(1);

		$('#adv-custom-pager a').eq(2);

		$('#adv-custom-pager a').eq(3);


	$(".cycle-pager span").wrapInner("<strong></strong>");

	//bigSlide button
	$('.pagerWrap .btnStop').click(function(){
		$(this).addClass('blind');
		$('.pagerWrap .btnPlay').removeClass('blind');
	});
	$('.pagerWrap .btnPlay').click(function(){
		$(this).addClass('blind');
		$('.pagerWrap .btnStop').removeClass('blind');
	});

	/********** TAB show / hide **********/
	$(".listTab li").click(function() {
		$(".listTab li").removeClass('select');
		$(this).addClass("select");
		$("div.tab_content").hide();
		var selected_tab = $(this).find("a").attr("href");
		$(selected_tab).fadeIn();

		return false;
	});
	$(".proctTab li").click(function() {
		$(".proctTab li").removeClass('select');
		$(this).addClass("select");
		$("div.tab_content2").hide();
		var selected_tab = $(this).find("a").attr("href");
		$(selected_tab).fadeIn();

		return false;
	});

	/********** input radio, checkbox 이미지 적용 **********/
	$("input[type='radio']:checked").next("label").addClass("on");
	$("input[type='checkbox']:checked").next("label").addClass("on");
	$("label.radio").click (function() {
		$(this).parent().find("label.radio").removeClass("on");
		$(this).addClass("on");
	});
	$("label.checkbox").click(function() {
		if ($(this).siblings("input").prop("checked") === false) {
			$(this).addClass("on");
		} else {
			$(this).removeClass("on");
		}
	});

	$(window).resize(function(event){
		controller();
		});
	controller();
});



$(function(){
	$.fn.autowidth = function(width) {
		var n = $( ".global_tab a" ).length;

		if (width <= 767){
			$('.global_tab a').css({'width' : 100+'%'})
		}
		else {
 			$('.global_tab a').css({'width' : (100 / $('.global_tab a').length) + '%'});
			if(n >= 8){
			$('.global_tab a').css({'width' : '25%'})
			}
		}
	};
	$('.global_tab').autowidth($(window).innerWidth());
});
$(window).resize(function() {
	$('.global_tab').autowidth($(window).innerWidth());
});



