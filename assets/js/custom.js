// This function scrolls to top after selecting a nav item
$('nav').on("click", function () {
  $(window).scrollTop(0);
});


//This function forces the collapse of the navbar after selection an item.
$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

//This function allows you to click anywhere on screen to hide the expanded navbar.
$(function () {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});
//This initializes the lightbox in the art gallery
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
event.preventDefault();
$(this).ekkoLightbox();
});
