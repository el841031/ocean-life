"use strict";
// 線上購票置頂消失 (首頁)
$(function(){
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 500 ){
			$('#TicketTop').fadeIn(0);
		} else {
			$('#TicketTop').stop().fadeOut(0);
		}
	}).scroll();
});


// 首頁header|滾輪往下滑出現
window.onscroll = function(){
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  var header = document.getElementById("header");
  if (scroll >= 78) {
    header.classList.remove("header_top");
  }
  else {
    header.classList.add("header_top");
  }
}

// scroll_down|點擊並滑到指定區域
// $(document).ready(function(){
//   let viewportHeight = $(window).height();
//   let header = $("header.header");
//
//   $("div.scrool_box").on("click", function(){
//     $("html, body").animate({
//       scrollTop: viewportHeight - 23
//     }, 500)
//   });
// });


// 最新消息-頁籤切換

$(function(){
$("a.change_btn").on("click", function(e){
  e.preventDefault();

  /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
  $(this).closest("ul").find("a.change_btn").removeClass("-on");
  $(this).addClass("-on");

  /* 找到對應的頁籤內容，加上 -on 來顯示 */
  $("div.tab").removeClass("-on");
  $("div.tab." + $(this).attr("data-target")).addClass("-on");
  });
});


// 特色
// (夢幻海底隧道)
// $(".tunnel").click(function(){   click事件
//   $(".feature_img01").attr("src","../images/feature_01a.jpg");  要變換的位置及圖片
// 	$(".feature_img02").attr("src","../images/feature_01b.jpg");
//
// 	$("#text01").hide();  html文字
// 	$("#text02").show();
//
// 	$("#one").css("font-size", "18px");  html文字大小/顏色
// 	$("#one").css("color", "white");
// });
// (聲光結合藝術饗宴)
// $(".light").click(function(){
//   $(".feature_img01").attr("src","../images/news_o05.jpg");
// 	$(".feature_img02").attr("src","../images/news_o05.jpg");
//
// 	$("#text01").hide();
// 	$("#text02").show();
//
// 	$("#one").css("font-size", "18px");
// 	$("#one").css("color", "white");
// });
// (聲光結合藝術饗宴)
// $(".moon").click(function(){
//   $(".feature_img01a").attr("src","../images/news_o05.jpg");
// 	$(".feature_img01b").attr("src","../images/news_o05.jpg");
//
// 	$("#text01").hide();
// 	$("#text02").show();
//
// 	$("#one").css("font-size", "18px");
// 	$("#one").css("color", "white");
// });
ScrollTrigger.defaults({
  markers:false
})

var points = gsap.utils.toArray('.point');
var indicators = gsap.utils.toArray('.indicator');

var height = 200 * points.length;

gsap.set('.indicators', {display: "flex"});

var tl = gsap.timeline({
  duration: points.length,
  scrollTrigger: {
    trigger: ".feature",
    start: "top center",
    end: "+="+height+"%",
    scrub: true,
    id: "points",
  }
})

var pinner = gsap.timeline({
  scrollTrigger: {
    trigger: ".feature",
    start: "-42px top",
    end: "+="+height+"%",
    scrub: true,
    pin: ".feature",
    pinSpacing: true,
    id: "pinning",
    markers: true
  }
})

// {autoAlpha:0, translateY: 100}, i)
// {autoAlpha:0, translateY: -100}, i + 0.75)
points.forEach(function(elem, i) {
  gsap.set(elem, {position: "absolute", top: 0});

  // tl.to(indicators[i], {backgroundColor: "orange", duration: 0.25}, i)
  tl.from(elem.querySelector('.right_box'), {autoAlpha:0, translateY: 100,}, i)
  tl.from(elem.querySelector('.left_box'), {autoAlpha:0}, i)

  if (i != points.length-1) {
    // tl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+0.75)
    tl.to(elem.querySelector('.left_box'), {autoAlpha:0}, i + 0.75)
    tl.to(elem.querySelector('.right_box'), {autoAlpha:0}, i + 0.75)
  }

});


// document.querySelectorAll('a[href]').forEach(a => {
//   a.addEventListener('click', e => {
//     TweenMax.to(window, 1, {scrollTo:{y:"#section2", offsetY:1200}});
//   });
// });
