

$(function() {

	var topoffset = 55; //variable for menu height

  //Use smooth scrolling when clicking on navigation
  $('.navbar-nav a').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

    $(window).on('activate.bs.scrollspy', function() {

        var hash = $('.site-nav')
            .find('a.active')
            .attr('href');

        if (hash !== '#page-hero') {

            $('header nav').addClass('inbody');
        } else {

            $('header nav').removeClass('inbody');
        }
    });
    
    $('#site-modal').on('show.bs.modal', function(event) {
        $(this)
            .find('.modal-content img')
            .attr('src', $(event.relatedTarget).data('highres'));
    });
});