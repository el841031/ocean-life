"use strict";
// 最新消息-頁籤切換
$(function(){
$("a.change_btn").on("click", function(e){
  e.preventDefault();

  /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
  $(this).closest("div").find("a.change_btn").removeClass("-on");
  $(this).addClass("-on");

  /* 找到對應的頁籤內容，加上 -on 來顯示 */
  $("div.tab").removeClass("-on");
  $("div.tab." + $(this).attr("data-target")).addClass("-on");

  // 控制頁碼標籤
  $("div.number_bt").removeClass("-on");
  $("div.number_bt." + $(this).attr("data-target")).addClass("-on");
  });
});

// 最新消息-頁碼切換
$(function(){
$("a.change").on("click", function(e){
  e.preventDefault();

  /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
  $(this).closest("div").find("a.change").removeClass("-on");
  $(this).addClass("-on");

  });
});
