import 'bootstrap/dist/css/bootstrap.css'
import './index.styl'

import './img/incoqnito_logo_white.svg'
import './img/facebook.svg'
import './img/xing.svg'
import './img/linkedin.svg'
import './img/instagram.svg'
import './img/menu.svg'
import './img/arrow-top.svg'
import './img/background.svg'
import './img/marker.png'
import 'jquery'
import 'bootstrap'
import Slideout from  'slideout'

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

  var slideout = new Slideout({
    'panel': document.querySelector('.site-container'),
    'menu': document.querySelector('.site-navigation'),
    'padding': 256,
    'tolerance': 70
  });

  document.querySelector('.mobile-navigation').addEventListener('click', function() {
    slideout.toggle();
  });

  $(window).scroll(function()
  {
      var window = $(this); 
      var totop = $('#totop')
      if(window.scrollTop() === 0) {
        totop.fadeOut()
      } else if(totop.css('display') === 'none') {
        totop.fadeIn()
      }
  });


})
