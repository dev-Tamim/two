$(window).on("load",function(){
  $(".preload").delay(10).fadeOut(300)
})

$('.banner_slide').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    dots:true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
  });
$('.screenshots_slide').slick({
    slidesToShow: 5,
    slidesToScroll:1,
    dots:true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
  });
  new VenoBox({
    selector: ".venobox"
});


$('.team_main').slick({
  slidesToShow: 3,
  slidesToScroll:1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows:false,
});

$('.user_text_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.user_image_main'
});
$('.user_image_main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.user_text_main',
  centerPadding:"0px",
  arrows:false,
  centerMode: true,
  focusOnSelect: true
});

$(window).scroll(function(){
  var scrolling=$(this).scrollTop()

  if (scrolling >20) {
    $(".nav_menu").addClass("bg")
  }else{$(".nav_menu").removeClass("bg")}
  if (scrolling >20) {
    $(".back_to_top").fadeIn(500)
  }else{$(".back_to_top").fadeOut(100)}
})

$(".back_to_top").click(function(){
  $("html,body").animate({
    scrollTop:0,
  })
})
