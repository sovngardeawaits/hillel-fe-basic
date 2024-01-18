$(`.burger`).click(function () {
    $(this).toggleClass(`active`);
    $(`.burger-nav`).toggleClass(`active`);

});

$('.close-menu').click(function() {
    $('.burger-nav').removeClass('active');
    $('.burger').removeClass('active');

  });

  $('.burger-nav').click(function() {
    $('.burger-nav').removeClass('active');
    $('.burger').removeClass('active');
  });

  $(document).ready(function(){
    $("#team-slider").owlCarousel({
      items: 1
    });
    
  });