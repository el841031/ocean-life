"use strict";
// TOP按鈕置頂


$(function(){
	$('#BackTop').click(function(){
		$('html,body').animate({scrollTop:0}, 333);
	});
});
