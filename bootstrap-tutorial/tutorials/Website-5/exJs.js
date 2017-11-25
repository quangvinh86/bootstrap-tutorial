 $(function(){
     var docao = $(window).height();
     $('.top1').css({'height':docao});

     $(window).resize(function(){
         var docao = $(window).height();
         $('.top1').css({'height':docao});
         var docao2 = docao * 30 / 100;
        $('#startBootstrap').css({'padding-top':docao2});
     });

     //click vao menu 
     $('.nutmenu').click(function(){
        $('.menuphai').addClass('ra');
        return false;
     });

     $('.tat').click(function(){
        $('.menuphai').removeClass('ra');
        return false;
     });

     $('.top1 a.btn.btn-default').click(function(){
        var body = $('body, html');
        body.animate({scrollTop:400});
        return false;
     });

     $('.top1 a.btn.btn-default').click(function(){
        $('body').animate({scrollTop:$('.top2').offset().top});

        return false;
    })

    $('#menuHome').click(function(){
        
        $('body,html').animate({scrollTop:0});
        return false;
    });

    $('#menuAbout').click(function(){
        $('body,html').animate({scrollTop:$('.top2').offset().top});
        return false;
    });

    $('#menuServices').click(function(){
        
        $('body, html').animate({scrollTop:$('.top3').offset().top});
        return false;
    });

    $('#menuContact').click(function(){
        $('body, html').animate({scrollTop:$('.footer').offset().top});
        return false;
    });

   $('.n2').click(function(){
        $('body').animate({scrollTop:$('.top6').offset().top});
        $('.menuphai').removeClass('ra');
        return false;
    })

})  
