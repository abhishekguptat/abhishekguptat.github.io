$(document).ready(function() {
  var current = location.pathname;
  $('.site-header a').each(function(){
    var $this = $(this);
    if($this.attr('href').indexOf(current) !== -1) {
      $this.addClass('');
    }
  })
})
