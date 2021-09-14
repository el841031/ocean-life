// 語言切換
$(function(){
$("li.language_change").on("click", function(e){
  e.preventDefault();

  /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
  $(this).closest("ul").find("li.language_change").removeClass("-on");
  $(this).addClass("-on");

  });
});

// 漢堡選單
$(function(){
  // hamburger icon 的切換
  $("button.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
  });
});

// 漢堡語言切換
$(function(){
$("ul.burger_language > li").on("click", function(e){
  e.preventDefault();

  /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
  $(this).closest("ul.burger_language").find("li").removeClass("-on");
  $(this).addClass("-on");

  });
});


// 點擊按鈕，選單縮放
$(function(){
  $("button.hamburger").on("click", function(){
    $("div.burger_nav").slideToggle();
  });
});

// 選單+縮放
var coll = document.getElementsByClassName("burger_li");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}





//漢堡凍結背景
// document.addEventListener('click', function(e){
//   if(e.target.classList.contains('menu-span')){
//     $('div.wrap').toggleClass('freeze');
//     $('body').toggleClass('freeze');
//     $('#section07').toggleClass('show');
//   }
// })
