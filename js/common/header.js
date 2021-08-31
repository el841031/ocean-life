// 語言切換
$(function(){
$("li.language_change").on("click", function(e){
  e.preventDefault();

  /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
  $(this).closest("ul").find("li.language_change").removeClass("-on");
  $(this).addClass("-on");

  });
});
