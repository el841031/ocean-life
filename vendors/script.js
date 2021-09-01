$(document).ready(function(){
  $(".menu_box").slick({
    // centerPadding: "0px",
    arrows: true, //是否要箭頭
    dots: true,  //是否要點點
    pauseOnDotsHover:true,
    dotsClass: 'slick-dots',
    rtl:false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay:true,
    autoplaySpeed:4000, //切換秒數
    speed:800, // Transition Speed
    slidesToShow:3, // Number Of Carousel
    slidesToScroll:1, // Slide To Move
    pauseOnHover:false,
    // appendArrows:$(".menu .Head .Arrows"), // Class For Arrows Buttons
    // prevArrow:'<span class="Slick-Prev"></span>',
    // nextArrow:'<span class="Slick-Next"></span>',
    easing:"linear",

    responsive:[
      {breakpoint:801,settings:{
        slidesToShow:3,
      }},
      {breakpoint:641,settings:{
        slidesToShow:3,
      }},
      {breakpoint:481,settings:{
        slidesToShow:1,
      }},
    ],

  })
})
