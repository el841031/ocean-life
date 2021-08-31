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
$(document).ready(function(){
  let viewportHeight = $(window).height();
  let header = $("header.header");

  $("div.scrool_box").on("click", function(){
    $("html, body").animate({
      scrollTop: viewportHeight - 23
    }, 500)
  });
});

// var scroll_down = document.getElementsByClassName("scrool_box")[0];
// scroll_down.addEventListener("click", function(){
//   ("html, body").animate()
//
// });

// function onTopClick() {
//      window.location.hash = "#scroll";
//    }


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


// 特色滾輪
// 
// document.onscroll=function()
// {
//     var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
//     var cHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
//     var oDiv=document.getElementById('showIt');
//     if(scrollTop>(oDiv.offsetTop-cHeight))
//     alert('触发了')
// }
