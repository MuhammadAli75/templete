$(function(){
    $("#top").click(function(){
        $(window).scrollTop(0);
      });

      $(".nav").click(function(){
        if($(window).width()<=899){
            $(".navbar").toggleClass("active")
            $(".nav i").toggleClass("fa-bars fa-times")
        }
        $(window).resize(function(){
            if($(window).width()>899){
                $(".navbar").removeClass("active")
                $(".nav i").removeClass("fa-times").addClass("fa-bars")
            }
        })
      })
      $(".second_imgs").on({
        mouseover:function(){
            $("p", this).stop().animate().fadeIn();
        },
        mouseout:function(){
            $("p", this).stop().animate().fadeOut();
        }
    })
    $(".second_imgs").on({
        mouseover:function(){
            $("img", this).css({filter:"blur(7px)"})
        },
        mouseout:function(){
            $("img", this).css({filter:"blur(0)"})
        }
    })
    $(".cbox").colorbox();
    AOS.init();
})