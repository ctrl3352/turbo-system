$(function(){
    // 
    var duration = 300;

    // images ----------------------------------------
    var $images = $('#works p');

    // images 第一個圖片
    $images.filter(':nth-child(1)')
        .on('mouseover', function(){
            $(this).find('span, strong, button').stop(true).animate({opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $(this).find('span, strong, button').stop(true).animate({opacity: 0}, duration);
        });

});
