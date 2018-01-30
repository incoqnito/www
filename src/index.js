import './sendmail.php'

import 'bootstrap/dist/css/bootstrap.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'animate.css'
import './index.styl'
import './img/background.jpg'

import './img/testamonial-background.jpg'
import './img/contact-background.jpg'
import './img/digital-background.jpg'

import './img/logo-horizontal.svg'
import './img/logo-horizontal-white.svg'

import './img/facebook.svg'
import './img/xing.svg'
import './img/linkedin.svg'
import './img/instagram.svg'
import './img/menu.svg'
import './img/menu-black.svg'
import './img/arrow-top.svg'
import './img/background.svg'
import './img/marker.png'

import './img/icons/costs.svg'
import './img/icons/webdev.svg'
import './img/icons/mobile.svg'
import './img/icons/webdev.svg'
import './img/icons/contact.svg'
import './img/icons/iot.svg'
import './img/icons/cloudcomputing.svg'
import './img/icons/projectmanagement.svg'
import './img/icons/consulting.svg'
import './img/icons/feedback-loop.svg'
import './img/icons/ruler.svg'
import './img/icons/skill.svg'
import './img/icons/costs.svg'
import './img/icons/timesaving.svg'
import './img/icons/transparence.svg'
import './img/icons/person.svg'
import './img/icons/address.svg'
import './img/icons/phone.svg'
import './img/icons/mail.svg'

import 'jquery'
import 'bootstrap'
import 'owl.carousel'
import 'jquery-match-height'
import './js/vendor/awesomeCloud.js'

import Slideout from  'slideout'
import Typed from 'typed.js'

$(document).ready(() => {
  $('.navigation').affix({
    offset: {
      top: function() {
        return (this.top = $('.banner').outerHeight(true) - 76)
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

  $('.testamonial').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'slideInUp',
    items: 1,
    margin: 30,
    dots: true,
    dotsEach: true,
    stagePadding: 30,
    smartSpeed: 450
  });

  $('.customers').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive:{
      0:{
        items: 2,
      },
      600:{
        items: 5,
      },
      1000:{
        items: 10
      }
    }
  })

  $('#services .icon-box p').matchHeight();
  //$('#services .icon-box h3').matchHeight();
  $('#incoqnito .icon-box p').matchHeight();
  //$('#incoqnito .icon-box h3').matchHeight();

  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    startDelay: 21,
    typeSpeed: 42,
    backSpeed: 21,
    loop: true
  });
  
})

var slideout = new Slideout({
  'panel': document.querySelector('.site-container'),
  'menu': document.querySelector('.site-navigation'),
  'padding': document.querySelector('.site').offsetWidth - 80,
  'tolerance': 70
});

var settings = {
  "size" : {
    "grid" : 8
  },
  "color" : {
    "start" : "#fff", // color of the smallest font, if options.color = "gradient""
    "end" : "#fff" // color of the largest font, if options.color = "gradient"
  },
  "options" : {
    "printMultiplier" : 2
  },
  "font" : "Futura, Helvetica, sans-serif",
  "shape" : "square"
}
$( "#wordcloud" ).awesomeCloud( settings );


window.closeMenu = function closeMenu() {
  slideout.close()
}


window.addEventListener('load', () => {
  $('body').addClass('loaded');
  $('#loader-wrapper').fadeOut(600)
})
