$(function(){
  //Slick Slider - Welcome
  $('.slideshow').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false
  });
  //Slick Slider - Welcome
  $('.review-slider').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // mockup-slider
  $('.mockup-slider').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    pauseOnHover: false
  });


  // typing TypeIt - welcome
    /* TypeIt - Welcome */
  $('#typing').typeIt({
    strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."],
    speed: 100,
    autoStart: true,
    breakLines: false,
  });

  // faq-accordion 
  $('.faq-desc').eq(0).show()
  $('.faq-title').click(function(){
    $(this).next().stop().slideDown()
    $(this).parent().siblings().children('.faq-desc').stop().slideUp()
    $(this).parent().addClass('active')
    $(this).parent().siblings().removeClass('active')
  });


  // video Modal
  $('.open-modal').click(function(){
    $('.video-modal').fadeIn()
    $('body').addClass('active')
  })
  $('.close-modal').click(function(){
    $('.video-modal').fadeOut()
    $('body').removeClass('active')
  })



  // window Scroll
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('header, .btn-top').addClass('active')
    }
    else{
      $('header, .btn-top').removeClass('active')
    }
  })
  /* Wow Scroll Reveal Animation */
  wow = new WOW({
    boxClass: 'wow',
    offset: 150,
    mobile: true
  })
  wow.init()
  

  /* Header Trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a, section').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })





})