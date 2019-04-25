$(document).ready(function(){

  // Sticky navigation
  const sticky = $("#project-nav");
  const stickyOffset = sticky.offset().top;

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= stickyOffset) {
      sticky.addClass('fixed-nav');
    } else {
      sticky.removeClass('fixed-nav');
    }
  });

  // Smooth scroll
  $('#project-nav a').click(function () {
    var y = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(y).offset().top
    }, 2000);
  });
});
