$(window).scroll(function() {

    if ($(window).scrollTop() > 30) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});


//모바일메뉴
$(document).ready(function(){
    mobile_menu();
  });
function mobile_menu(){
    var $menu = null;
    var $left_gnb = null; 
    var $depth1_wrap = null;
    var $depth1 = null;
    var $depth1_btn = null;
    
    function start(){
        init();
        init_event();
    }
    function init(){
        $menu = $('.mobilenav');
        $left_gnb = $('.left_gnbWrap'); 
        $depth1_wrap = $('.left_gnb>li');
        $depth1 = $depth1_wrap.children('ul');
        $depth1_btn = $depth1_wrap.children('a');
    }
    function init_event(){
        
        $menu.click(function(event){
            event.preventDefault();
            $left_gnb.addClass('on');
        });
        
        $('.mclose').click(function(event){
            event.preventDefault();

            $left_gnb.removeClass('on');
            
            setTimeout(function(){
                $depth1_btn.removeClass('on');
                $depth1.slideUp();
            },300)
        });
        
        $depth1_btn.click(function(event){
            event.preventDefault();
            var $this = $(this);
            var $this_ul = $this.siblings('ul');

            var check = $this.hasClass('on');
            if(check){
                $this.removeClass('on');
                $this_ul.stop(true,true).slideUp();
            }else{
                $depth1_btn.removeClass('on');
                $depth1.stop().slideUp();
                $this.addClass('on');
                $this_ul.stop(true,true).slideDown();
            }
        });
        
        $(window).resize(function(){
            $left_gnb.removeClass('on');
        });
    }
    
    start();
}
$(document).ready( function() {
    $( '.mobileser' ).click( function() {
      $( '.sform' ).slideToggle(500);
    });
  });


 