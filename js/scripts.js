$(document).ready(function(){
  $('ul.tabs').tabs('select_tab', 'tab_id');
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  // Add header class to body after 10px
  $( window ).bind( 'load scroll', function() {

      if ( $( window ).scrollTop() > 10 ) {

          $( 'nav' ).addClass( 'scrolling' );

      } else {

          $( 'nav' ).removeClass( 'scrolling' );

      }

  });

});
