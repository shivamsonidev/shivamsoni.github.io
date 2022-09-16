$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({scrollTop: $(hash).offset().top - 81 });
        }
    });

    function checkForSection(section, classToTrigger) {
        var menuTop = $(section).offset().top + $(section).outerHeight()/2;
        if($(window).scrollTop()>menuTop){
            $('.page-bg').addClass(classToTrigger);
        }
        else {
            $('.page-bg').removeClass(classToTrigger);
        }
    }
    function checkBackgroundScroll() {
        checkForSection('.banner', 'section-2');
        checkForSection('.about', 'section-3');
        checkForSection('.clients', 'section-4');
        checkForSection('.projects', 'section-5');
    }
    function showClients(i) {
        setTimeout(function() {
            if(i<=$('.clients .single').length) {
                $(`.clients .single:nth-child(`+i+`)`).addClass('fadenow');                
            }
            showClients(i+1);
        }, 200);
    }
    function reachedClients() {
        var clientTop = $('#clients').offset().top - $('.headstart').height() - 400;
        if($(window).scrollTop()>=clientTop){
            if(!$(`.clients .single:nth-child(1)`).hasClass('fadenow')) {
                showClients(1);
            }
        }
    }
    checkBackgroundScroll();
    reachedClients();
    $(window).scroll(function(){
        checkBackgroundScroll();
        reachedClients();
    });

    $(".hamburger, .avoid").on('click',function(){
        if($(window).width()<992){
            setTimeout(function(){
                $('.menulist').slideToggle(300);
                $('body').toggleClass('opened');
            },0);
        }
    });
    $(".header-stopper").on('click',function(){
        if($(window).width()<992){
            setTimeout(function(){
                $('.menulist').slideToggle(300);
                $('body').toggleClass('opened');
            },0);
        }
    });
    $(".header ul li a").on('click',function(){
        if($(window).width()<992){
            setTimeout(function(){
                $('.menulist').slideToggle(300);
                $('body').toggleClass('opened');
            },0);
        }
    });
    
    if($('.projects #slider').length) {
        var aboutPageSlider = new Swiper('.projects #slider', {
            slidesPerView: 1.2,
            spaceBetween: 0,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: '.swiper-pagination',
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                },
            },
        });
    }
    
    function startTime() {
        var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});    
        var today = new Date(indiaTime);
        var h = checkTime(today.getHours());
        var m = checkTime(today.getMinutes());
        var ampm = checkAmPm(h);
        h = h > 12 ? h - 12 : h;
        $('#timetoadd').text( h + ":" + m  + ' ' + ampm );
        var t = setTimeout(startTime, 500);
    }
    function checkAmPm(i) {
        return i < 12 ? 'am' : 'pm';
    }
    function checkTime(i) {
      if (i < 10) {i = "0" + i};
      return i;
    }
    startTime();
});