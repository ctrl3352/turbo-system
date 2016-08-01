/*---------- 區塊滿版 ----------*/

$(function(){
    var windowH = $(window).height();
    var windowW = $(window).width();
    $('#topmovie, #menu').css({'height': windowH });
});

// for the window resize
$(window).resize(function() {
    var windowH = $(window).height();
    var windowW = $(window).width();
    var autoHeight = $('.center .games_info_img').height() + 50;
    $('#topmovie, #menu').css({'height': windowH });
    $("#games_carousel .owl-stage-outer").css({'height': autoHeight + 'px'});
});

/*---------- 回到置頂 ----------*/

$(function(){

    var $back_to_top = $('.gotop');

    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $back_to_top.addClass('cd-is-visible');
        }else{
            $back_to_top.removeClass('cd-is-visible');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, 1000
        );
    });
});

/*---------- 主選單開關背景 ----------*/

$(function (){

    var duration = 800;

    $('a[href*=#]:not([href=#])').click(function() {

       var target = $(this.hash);

       $('html,body').animate({
           scrollTop: target.offset().top
       }, 1000);

       $('.pagination li a').removeClass('active');
       $(this).addClass('active');
   });

});

/*----- 漢堡按鈕觸發 --------*/

$(function(){

  var $header = $('header');

  $header.find("#spinner-form").click(function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $header.stop(true).animate({right: 0},500,'easeOutQuart');
      $('.wrapper').stop(true).animate({left: '-150px'},500,'easeOutQuart');
      $('#logo').stop(true).animate({left: '160px'},500,'easeOutQuart');
      $('#menu').addClass('active');
    }else{
      $header.stop(true).animate({right: '-300px'},500,'easeOutQuart');
      $('.wrapper').stop(true).animate({left: 0},500,'easeOutQuart');
      $('#logo').stop(true).animate({left: '30px'},500,'easeOutQuart');
      $('#menu').removeClass('active');
    };
  });
});

/*----- 主選單按鈕滑動 --------*/

$(function(){
  $('.menu-item').click(function(){
    var menuChild = $(this).next('.menu-child');
    $('.drill-down').height(menuChild.height());
    menuChild.addClass('is-active');
  });

  $('.menu-child').prepend('<li class="js-item-back"><a>Back<i class="fa fa-arrow-left" aria-hidden="true"></a></li>');

  $('.js-item-back').click(function(){
    var parentEle = $(this).parent();
    parentEle.removeClass('is-active');
    $('.drill-down').height(parentEle.parent().parent().height());
  });
});

/*---------- 側邊快捷按鈕設計 ----------*/

jQuery(document).ready(function($){
  var scrolling = false;
  var contentSections = $('.cd-section'),
    verticalNavigation = $('.page_navigation'),
    navigationItems = verticalNavigation.find('a'),
    navTrigger = $('.cd-nav-trigger'),
    scrollArrow = $('.cd-scroll-down');

  $(window).on('scroll', checkScroll);

  //smooth scroll to the selected section
  verticalNavigation.on('click', 'a', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
        verticalNavigation.removeClass('open');
    });

    //smooth scroll to the second section
    scrollArrow.on('click', function(event){
      event.preventDefault();
        smoothScroll($(this.hash));
    });

  // open navigation if user clicks the .cd-nav-trigger - small devices only
    navTrigger.on('click', function(event){
      event.preventDefault();
      verticalNavigation.toggleClass('open');
    });

  function checkScroll() {
    if( !scrolling ) {
      scrolling = true;
      (!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
    }
  }

  function updateSections() {
    var halfWindowHeight = $(window).height()/2,
      scrollTop = $(window).scrollTop();
    contentSections.each(function(){
      var section = $(this),
        sectionId = section.attr('id'),
        navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
      ( (section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) )
        ? navigationItem.addClass('active')
        : navigationItem.removeClass('active');
    });
    scrolling = false;
  }

  function smoothScroll(target) {
        $('body,html').animate(
          {'scrollTop':target.offset().top},
          300
        );
  }
});

/*---------- header滑動 ----------*/

$(function() {

  var $nav = $('.navbar');
  var lastPos = 0;
  var nav_hide = false;
  
  $(window).on('scroll', function(e) {
    var currPos = $(this).scrollTop();
    var delta = currPos - lastPos;
    lastPos = currPos;
    //console.log(delta);
    //如果往下滑 而且還沒有隱藏BAR就添加CALSS
    if ( delta > 0) {
      if(!nav_hide){
        $nav.addClass('navbar-hide');
        nav_hide = true;
      }
    } else {
      if(nav_hide){
        $nav.removeClass('navbar-hide');
        nav_hide = false;
      }
    }
    
   
  });
});

/*--------- 讀取頁結束觸發 ----------*/

$(window).load(function() {   

  var autoHeight = $('.center .games_info_img').height() + 50;
  $("#games_carousel .owl-stage-outer").css({'height': autoHeight + 'px'});

  $("#preloader").addClass('finished').delay(1000).animate({
    opacity: 0},400,function(){
        $(this).delay(800).css('height',0);
    });

});