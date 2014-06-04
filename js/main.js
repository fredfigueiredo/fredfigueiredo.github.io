// Smooth scroll
// Adapted from http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href^="\\#"]').click(function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  });
});
