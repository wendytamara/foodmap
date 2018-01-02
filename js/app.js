function begin() {
  $('#contain').hide();
  setTimeout(function() {
    $('.splash').fadeOut();
    $('#contain').show();
  }, 200);

  var $container = $('#restaurants');
  function showRestaurants() {
    for (var i = 0; i < data.length; i++) {
      var $containerFoods = $('<div></div>');
      $containerFoods.addClass('col-xs-6 col-md-4 collection box');
      $containerFoods.attr('data-name', data[i].name);
      $containerFoods.attr('data-toggle', 'modal');
      $containerFoods.attr('data-target', '#myModal');
      $container.append($containerFoods);

      var $text = $('<p></p>');
      $text.addClass('title');
      $text.text(data[i].name);
      $containerFoods.append($text);

      var $img = $(' <img/> ');
      $img.addClass('img-responsive img-thumbnail food-img');
      $img.attr('src', data[i].image);
      $containerFoods.append($img);
    }
  }

  showRestaurants();

  $('#filtro').keyup(function() {
    var nombre = $(this).val();
    $('.collection').hide();
    $('.collection').each(function(){
      var search = $(this).text();
      if (search.indexOf(nombre) !== -1) {
        $(this).show();
      }
     });
   })

  $('.box').on('click', function() {
    for (i = 0; i < data.length; i++) {
      if ($(this).data('name') === data[i].name) {
        $('.logo-restaurant').attr('src', data[i].logo);
        $('.restaurant').attr('src', data[i].local);
        $('.address').text(data[i].address);
        $('.price').text(data[i].price);
        $('.food').text(data[i].type);
      }
    }
  });

  $('.box').on('mouseover', function() {
    $(this).addClass('.transition-img');
    $('.box').on('mouseout', function() {
      $(this).removeClass('.transition-img');
    });
  });
}
$(document).ready(begin);
