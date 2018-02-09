/**
 * 
 */
(function($){
  wp.customize( 'ac_header_show_search', function(value){
      value.bind(function(new_val){
          if( new_val ){
              $("#top-search").show();
          }else{
              $("#top-search").hide();
          }
      });
  });

  wp.customize( 'ac_header_show_cart', function(value){
      value.bind(function(new_val){
          if( new_val ){
              $("#top-cart").show();
          }else{
              $("#top-cart").hide();
          }
      });
  });
})(jQuery);