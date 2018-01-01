function begin(){
  $('.section').hide();

    setTimeout(function() {
     $('.splash').fadeOut(3000);
     $('.section').show();
   },1000 );

   var $container = $('#restaurants');

   function showRestaurants() {
     for (var i = 0; i < data.length; i++) {
       var $containerFoods = $('<div></div>');
       $containerFoods.addClass('col-xs-4 thumbnail');
       $containerFoods.attr('data-name', data[i].name);
       $containerFoods.attr('data-toggle', 'modal');
       $containerFoods.attr('data-target', '#myModal');
       $container.append($containerFoods);

       var $text = $('<p></p>');
       $text.addClass('title');
       $containerFoods.append($text);

      var $img = $( "<img/>");
      $img.addClass('img-responsive');
      $img.attr('src', data[i].image);
      $containerFoods.append($img);
     }
   }

showRestaurants();








}

$(document).ready(begin);
