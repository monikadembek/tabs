$(function(){
  var $tabMenuList = $('.tabs-menu');
  $('#one').show();   //shows first tab content
  $('.tabs div:not(#one)').hide(); 	//hides content of the rest of the tabs

  $tabMenuList.on('click', function(e) {
    $link = $(e.target) //position in the menu list that was clicked
    var attr = $link.attr('data-content'); 
    $link.addClass('current-menu');
    $link.siblings().removeClass('current-menu');
    $('#' + attr).show(); //shows content of the tab that was clicked
    $('.tabs div:not(#'+ attr +')').hide();
  });
});