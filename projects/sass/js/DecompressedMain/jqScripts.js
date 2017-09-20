//Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, .mob-menu a, .jumbo-btns a, .prices-main-footer a, footer a[href='#myPage']").on('click', function(event){
        // Make sure this.hash has a value before overriding default behavior
        if(this.hash !== ""){
            //Prevent default anchor click behavior
            event.preventDefault();
            
            //Store hash
            var hash = this.hash;
            
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
               scrollTop: $(hash).offset().top 
            }, 1000, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });




// Portfolio Controll
jQuery(document).ready(function($){
    $(".iso-main").isotope({
        itemSelector: '.item-port',
        layoutMode: 'fitRows',
    });
    
    
    $('.iso-nav ul li button').click(function(){ 
        
      $(".iso-nav ul li button").removeClass("active");
      $(this).addClass("active");        

        var selector = $(this).attr('data-filter'); 
        $(".iso-main").isotope({ 
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

//Wow.js Init

wow = new WOW({
    offset: 0,
    mobile: false
})
wow.init();