$(".animsition").animsition({
    inClass: 'fade-in-up'
    , outClass: 'fade-out-up'
    , inDuration: 1500
    , outDuration: 1000
    , linkElement: '.animsition-link'
    , // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true
    , loadingParentElement: 'body' //animsition wrapper element
    , loadingClass: 'animsition-loading'
    , loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false
    , timeoutCountdown: 5000
    , onLoadEvent: true
    , browser: ['animation-duration', '-webkit-animation-duration']
    , // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false
    , overlayClass: 'animsition-overlay-slide'
    , overlayParentElement: 'body'
    , transition: function (url) {
        window.location.href = url;
    }
});

$(document).ready(function () {
    
    $('#trailer').on('hidden.bs.modal', function () {
        $('#videoo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
    
    /*$('body').on('animsition.inEnd', function(){
        $('#landpage .toppanel .textpanel .col-md-6').addClass('textup');
    });*/
    
    /*$('body').addClass('ready');*/
    $('.readmore .buttype1').click(function(){
        $('#scalexs').show();
        $(this).hide();
        $('.readmore').addClass('dissed');
    });
    
    function scaleimg() {
        if($(window).width() >= 1025) {
            $('.twoimgpanel .panel2').css('height',$('.twoimgpanel .panel1 img').outerHeight());
            $('.twoimgpanel .panel2 img.feet').css('margin-top', ($('.twoimgpanel .panel2').outerHeight() - $('.twoimgpanel .panel2 img.feet').outerHeight() )/2 );
            var x = $('.videotext').outerHeight() - ($('.twoimgpanel .panel2').height()*1.4 )/2;
            $('.videotext').css('margin-top', x );
        }
        if(($(window).width() >= 992)&&($(window).width() <= 1024)) {
            $('.twoimgpanel .panel2').css('height',$('.twoimgpanel .panel1 img').outerHeight());
            $('.twoimgpanel .panel2 img.feet').css('margin-top', ($('.twoimgpanel .panel2').outerHeight() - $('.twoimgpanel .panel2 img.feet').outerHeight() )/2 );
            var x = - $('.videotext').outerHeight() - ($('.twoimgpanel .panel2').height()*1.1 )/2;
            $('.videotext').css('margin-top', x );
        }
        if(($(window).width() >= 768)&&($(window).width() <= 991)) {
            var x = - $('.videotext').outerHeight() - ($('.twoimgpanel .panel2').height()*.8 )/2;
            $('.videotext').css('margin-top', x );
        }
        if($(window).width() < 768) {
            var x = - $('.videotext').outerHeight() - ($('.twoimgpanel .panel2').height()*.85 )/2;
            $('.videotext').css('margin-top', x );
        }
        if($(window).width() > 767) {
            var x = ($('.aboutintro .imgcontainer img').height() - $('.aboutintro.justimgbox .fullpanel').height() )/2;
            $('.aboutintro.justimgbox .fullpanel').css('padding-top', x );
        }
    }
    scaleimg();
    $('body').on('animsition.inEnd', function(){
        scaleimg();
    });
    $(window).on('resize', function(){
        scaleimg();
    });
});