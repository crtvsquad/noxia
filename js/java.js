$(document).ready(function(){
/******* Youtube video ***** */

    
    $(".popup").grtyoutube();

/******* Form style ***** */
$(".name").click(function(){
 $ (this).css("background","white").css("border","2px solid red");
 
});

$(".number").click(function(){
    $ (this).css("background","white").css("border","2px solid red");
    
   });

   $(".slider").slick({
    lazyLoad: 'ondemand', 
    infinite: true,
    dots: true,
   mobileFirst	:true,



});

$('.slide-logo').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    infinite: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '10px',
              slidesToShow: 3
            }
          },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 570,
          settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
    ]
  });
  
  var filtered = false;
  
  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
  });

  $(window).scroll(function(){

 if($(window).scrollTop() > 1200 ){
  $(".botom i").show();
}
else{
  $(".botom i").hide()
}

  });

$(".botom i").click(function(){
  $("html").animate({scrollTop:0},1200);
});

new WOW().init();



$(window).scroll(function(){

  if($(window).scrollTop() > 100 ){
   $(".navbar")
   .css("position","fixed")
   .css("background","#752EA2")
   .css("width","100%")
   .css("top","0")
   .css("left","0")
 }
 else{
   $(".navbar")
   .css("position","inherit")
   .css("background","none")

 }

 
   });

   $('html').smoothScroll(800);
   
   	jQuery('.main-menu').meanmenu({
    mobileMenuContainer:'.main-menu',
    meanScreenWidth:'767'

  });



});
















