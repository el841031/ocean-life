"use strict";
// 輪播圖

// 初始化
// $(document).ready(function(){
//   $('.menu_box').slick({
//     setting-name: setting-value
//   });
// });


$(function(){
  $('.menu_box').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
