$(document).ready(function(){
    open_chatroom();
    function open_chatroom(){
        var windowWidth = $( window ).width();
        if(windowWidth >= 1200) {
            AOS.init();
        new fullpage('#wrap', {

            // AOS 충돌시 문제해결
            onLeave: function(){
                jQuery('.section [data-aos]').removeClass("aos-animate");
            },
            onSlideLeave: function(){
                jQuery('.slide [data-aos]').removeClass("aos-animate");
            },
            afterSlideLoad: function(){
                jQuery('.slide.active [data-aos]').addClass("aos-animate");
            },
            afterLoad: function(){
                jQuery('.section.active [data-aos]').addClass("aos-animate");
            jQuery('.fp-table.active .aos-init').addClass('aos-animate');
            }
        });
    
    
        //배너스와이퍼
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            effect: "fade",
            autoplay: {
                delay: 2500
              },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });


        //자동반복
        // =>1초마다 right에 지정된 클릭이벤트 실행하기
        // function time(){
        //     auto=setInterval(function(){
        //         $('.slide-next').trigger('click')
        //     },2000);
        // };
        // time();

        //setInterval 삭제시키기(mouseenter)
        //hover는 꼭 마우스엔터,리브 꼭 둘다 설정해야함
        // $('.arrow-btn').hover(function(){
        //     clearInterval(auto);
        // },function(){
        //     //1초마다 right에 지정된 클릭이벤트를 실행(mouseleave)
        //     time();
        // });






        //풀페이지 슬라이드
        //마우스 휠 이벤트
        //event : 마우스 휠이 움직일때 이벤트
        //delta : 마우스휠의 방향
        //delta > 0 : 마우스 휠을 아래에서 위로 움직일 때
        //delta < 0 : 마우스 휠을 위에서 아래로 움직일 때
        // $('section').on('mousewheel',function(event,delta){
        //     if(delta > 0){
        //         var prev=$(this).prev().offset().top;
        //         $('html,body').stop().animate({
        //             scrollTop:prev
        //         },1000,'easeInCirc');
        //         console.log('이전 section의 위치값='+prev);
        //     }else if(delta < 0){
        //         var next=$(this).next().offset().top;
        //         console.log('다음 section의 위치값='+next);
        //         $('html,body').stop().animate({
        //             scrollTop:next
        //         },1000,'easeInCirc');
        //     }
        // });
        //.offset()
        //=>$('선택자').offset().top
        //=>선택자의 상단 위치값 가져오기




        //서브메뉴
        $('.menu li').mouseenter(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');

            var result = $(this).attr('data-alt');
            $('.sub-menu').removeClass('active');

            $('#' + result).addClass('active');

            $('.sub-menu-box').stop().slideDown().addClass('active');
        });

        $('.sub-menu-box').mouseleave(function(){
        //서브메뉴박스에서 마우스리브되야 메뉴가 없어짐
            // $('.sub-menu').removeClass('active');
            $(this).stop().slideUp().removeClass('active');
                
        });




        //sec-4
        $('.inner-gallery').mouseenter(function(){
            var changeImage = $(this).attr('data-image')
            $('.fade-gallery-photo').css({
                'background-image': 'url('+ changeImage +')'
            });
        });

        $('.inner-gallery').mouseleave(function(){
            $('.fade-gallery-photo').css({
                'background-image': ''
            });
        });


        

        //AOS
        // AOS.init(); 



    }else{
        //창 가로 크기가 1200미만일 경우(효과제거)



        //배너스와이퍼
        var swiper = new Swiper(".mySwiper", {
            loop: true,

            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });
        //자동반복
        // =>1초마다 right에 지정된 클릭이벤트 실행하기
        function time(){
            auto=setInterval(function(){
                $('.slide-next').trigger('click')
            },2000);
        };
        time();

        //setInterval 삭제시키기(mouseenter)
        //hover는 꼭 마우스엔터,리브 꼭 둘다 설정해야함
        $('.arrow-btn').hover(function(){
            clearInterval(auto);
        },function(){
            //1초마다 right에 지정된 클릭이벤트를 실행(mouseleave)
            time();
        });


        //햄버거버튼
        $('#hamburger').click(function(){
            $('#hamburger').toggleClass('active');
            $('nav').toggleClass('active');
            // if($('#hamburger').hasClass('active')){
            //     $('body').css({'overflow-y':'hidden'});
            //     console.log('메뉴on');
            // }else{
            //     $('body').css({'overflow-y':'scroll'});
            //     console.log('메뉴off');
            // }
        });

        //스크롤바
        $(window).scroll(function(){
            if($(window).scrollTop() > 300){
                $('.header-area').addClass('active');
                $('.header-logo').addClass('active');
            }else{
                $('.header-area').removeClass('active');
                $('.header-logo').removeClass('active');

            }
        });
        


        
    }
    }

});//end