/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

// Dependency: classie.js
// Make sure that DOM is loaded.
document.addEventListener('DOMContentLoaded', function() {

  var cbpAnimatedHeader = ( function() {

    var docElem = document.documentElement,
      header = document.querySelector( '.cbpAnimatedHeader' ),
      didScroll = false,
      changeHeaderOn = 200;

    console.table (header);

    function init() {
      window.addEventListener( 'scroll', function( event ) {
        if( !didScroll ) {
          didScroll = true;
          setTimeout( scrollPage, 250 );
        }
      }, false );
    }

    function scrollPage() {
      var sy = scrollY();
      if ( sy >= changeHeaderOn ) {
        classie.remove( header, 'navbar-expanded' );
      }
      else {
        classie.add( header, 'navbar-expanded' );
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    init();

  })();

});
