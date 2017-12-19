import 'bootstrap/dist/css/bootstrap.css'
import './index.styl'

import'./img/incoqnito_logo_white.svg'
import'./img/facebook.svg'
import'./img/xing.svg'
import'./img/linkedin.svg'
import'./img/instagram.svg'

import 'jquery'
import 'bootstrap'

$(document).ready(() => {
  $('.sub-navigation').affix({
    offset: {
      top: function() {
        return (this.top = $('.banner').outerHeight(true) - 47)
      }
    }
  })
  
  $('body').scrollspy({ 
    target: '.sub-navigation'
  })

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  $('.social-media-icon.facebook').mouseover( function(){
    $('.follow').addClass('facebook');
  });
  $('.social-media-icon.facebook').mouseout( function(){
    $('.follow').removeClass('facebook');
  });
  $('.social-media-icon.xing').mouseover( function(){
    $('.follow').addClass('xing');
  });
  $('.social-media-icon.xing').mouseout( function(){
    $('.follow').removeClass('xing');
  });
  $('.social-media-icon.linkedin').mouseover( function(){
    $('.follow').addClass('linkedin');
  });
  $('.social-media-icon.linkedin').mouseout( function(){
    $('.follow').removeClass('linkedin');
  });
  $('.social-media-icon.instagram').mouseover( function(){
    $('.follow').addClass('instagram');
  });
  $('.social-media-icon.instagram').mouseout( function(){
    $('.follow').removeClass('instagram');
  });
})
