$(document).ready(function(){

  // Function to find if an element is in viewport
  $.fn.isInViewPort = function() {
    // For element's bottom to be visible
    // scroll length of window >= element offset - window height + element height
    var scrollPos = $(window).scrollTop();
    var elementOffset = $(this).offset().top;
    var windowHeight = $(window).height();
    var elementHeight = $(this).outerHeight();

    return scrollPos >= elementOffset - windowHeight + elementHeight;
  };

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

// Check if projects are in viewport and animate

$('.project .text-block').each(function() {
  if ($(this).isInViewPort()) {
    $(this).addClass('animate-pop-in');
  }
});


// Progress indicator

var pageHeight = $(document).height() - 421;
var scrollPercentage = scroll/pageHeight*100;
console.log(pageHeight-scroll);
$('.progress-indicator').css("width", scrollPercentage + '%');



// Active nav

    var o1 = $("#project1").offset().top;
    var o2 = $("#project2").offset().top;
    var o3 = $("#project3").offset().top;
    var o4 = $("#project4").offset().top;
    var o5 = $("#project5").offset().top;

    if (scroll >= o1 & scroll <= o2) {
      $("#project-nav1").addClass('active-nav');
    } else {
      $("#project-nav1").removeClass('active-nav');
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
