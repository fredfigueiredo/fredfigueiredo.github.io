$(function() {

  // Smooth scroll
  // Adapted from http://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href^="\\#link"]').click(function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  });

  // Quotes Carousel, from: http://codepen.io/ngot3382/pen/Dorke/
  //Set the carousel options
  $('#quote-carousel').carousel({
    interval: false,
  });

});