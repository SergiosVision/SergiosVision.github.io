// Portfolio Controll
jQuery(document).ready(function($){
    $(".iso-main").isotope({
        itemSelector: '.item-port',
        layoutMode: 'fitRows',
    });
    
    
    $('.portfolio-content-main ul li a').click(function(){ 
        
      $(".portfolio-content-main ul li a").removeClass("active");
      $(this).addClass("active");        

        var selector = $(this).attr('data-filter'); 
        $(".portfolio-content").isotope({ 
            filter: selector, 
            animationOptions: { 
                duration: 750, 
                easing: 'linear', 
                queue: false, 
            } 
        }); 
      return false; 
    }); 
    
});