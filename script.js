$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({scrollTop: $(hash).offset().top - 81 });
        }
    });

    function checkHomeMenu() {
        // var aTop = $('#about').offset().top - $('.headstart').height();
        var menuTop = $('.headstart').height();
        if($(window).scrollTop()>=menuTop){
            $('.headstart').addClass('scrolled');
        }
        else {
            $('.headstart').removeClass('scrolled');
        }
    }
    function showClients(i) {
        setTimeout(function() {
            if(i<16) {
                $(`.clients .single:nth-child(`+i+`)`).addClass('fadenow');
                // var tc = setTimeout(showClients(i+1), 1000 * i);
                
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
    checkHomeMenu();
    reachedClients();
    $(window).scroll(function(){
        checkHomeMenu();
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
        console.log('a');
        if($(window).width()<992){
            setTimeout(function(){
                $('.menulist').slideToggle(300);
                $('body').toggleClass('opened');
            },0);
        }
    });
    
    // function startTime() {
    //     var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});    
    //     var today = new Date(indiaTime);
    //     var h = checkTime(today.getHours());
    //     var m = checkTime(today.getMinutes());
    //     var ampm = checkAmPm(h);
    //     h = h > 12 ? h - 12 : h;
    //     $('#timetoadd').text( `(` + h + ":" + m  + ' ' + ampm + `)`);
    //     var t = setTimeout(startTime, 500);
    // }
    // function checkAmPm(i) {
    //     return i < 12 ? 'am' : 'pm';
    // }
    // function checkTime(i) {
    //   if (i < 10) {i = "0" + i};
    //   return i;
    // }
    // startTime();
});