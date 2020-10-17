(function($) { 

  var container = $('.container');
  var location = $('#location');
  var section = $('.section');
 
  section.on('mouseover', function(){
      location.addClass('open-menu');
  });
  section.on('mouseout', function(){
      location.removeClass('open-menu');
  });  
  location.on('mouseover', function(){
      location.addClass('open-menu');
  });
  location.on('mouseout', function(){
      location.removeClass('open-menu');
  });

})(jQuery);
