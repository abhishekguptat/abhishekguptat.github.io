$(document).ready(function(){

  //Set height of phone chassis based on aspect ratio of Image
  $(".phone-chassis").each(function() {
    var x = $(this).width();
    var y = (x - 16)*16/9;
    $(this).css("height", y + 120);
  });


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
      sticky.addClass('fixed-nav animate-pop-in');
    } else {
      sticky.removeClass('fixed-nav animate-pop-in');
    }

// Check if projects are in viewport and animate

$('.project .text-block').each(function() {
  if ($(this).isInViewPort()) {
    $(this).addClass('animate-pop-in');
  }
});


// Progress indicator

var pageHeight = $(document).height();
var scrollPercentage = scroll/(pageHeight - 421)*100;
console.log(pageHeight-scroll);
$('.progress-indicator').css("width", scrollPercentage + '%');



// Active nav

    if (scroll < pageHeight - 670) {
      console.log(scroll);
      console.log(pageHeight);
      $(".fixed-nav").css("bottom", "0");
    } else {
      $(".fixed-nav").css("bottom", "66px");
    }

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
    if (scroll >= o2 & scroll <= o3) {
      $("#project-nav2").addClass('active-nav');
    } else {
      $("#project-nav2").removeClass('active-nav');
    }
    if (scroll >= o3 & scroll <= o4) {
      $("#project-nav3").addClass('active-nav');
    } else {
      $("#project-nav3").removeClass('active-nav');
    }
    if (scroll >= o4 & scroll <= o5) {
      $("#project-nav4").addClass('active-nav');
    } else {
      $("#project-nav4").removeClass('active-nav');
    }
    if (scroll >= o5) {
      $("#project-nav5").addClass('active-nav');
    } else {
      $("#project-nav5").removeClass('active-nav');
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
