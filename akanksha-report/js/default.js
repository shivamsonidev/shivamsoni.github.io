$(document).ready(function () {
    $(".header ul li a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
        $(".header, .header ul li.menu-item-has-children.opened").removeClass('opened');
        $("body").removeClass("menuopened");
    });

    $(".hamburger").on('click', function () {
        setTimeout(function () {
            //$('.menulist').slideToggle(300);
            $('.header').toggleClass('opened');
            $('body').toggleClass('menuopened');
            $(".header ul li.menu-item-has-children.opened").removeClass('opened');
        }, 0);
    });
    $(".backdrop").on('click', function () {
        $('.header').toggleClass('opened');
        $('body').toggleClass('menuopened');
        $(".header ul li.menu-item-has-children.opened").removeClass('opened');
    });
    $(".header ul li.menu-item-has-children").on('click', function () {
        $(this).toggleClass('opened');
    });
    $('.header li.menu-item-has-children').hover(function () {
        if ($(window).width() > 992) {
            $(this).find('ul.sub-menu:first').show()
        }
    }, function () {
        if ($(window).width() > 992) {
            $(this).find('ul.sub-menu:first').hide();
        }
    });

    var headernames = ["intro", "schoolproject", "focusareas", "alumni","akanksha3","academy", "stopper"];

    $(document).on('scroll', function () {
        for (i = 0; i < headernames.length; i++) {
            if (($(this).scrollTop() > $('#'+headernames[i]).position().top - 1)&&($(this).scrollTop() <= $('#'+headernames[i+1]).position().top)) {
                for (j = 0; j < i; j++) {
                    $("#menu-header li:nth-child(" + (j + 1) + ")").removeClass("current-menu-item");
                }
                $("#menu-header li:nth-child(" + (i + 1) + ")").addClass('current-menu-item');
                for (j = i+1; j < headernames.length; j++) {
                  $("#menu-header li:nth-child(" + (j + 1) + ")").removeClass("current-menu-item");
                }
            }
        }
    });

    /*$(".cardlist .readmore").click(function(){
        $(this).parent().parent().addClass("open");
    });
    $(".cardlist .readless").click(function () {
        $(this).parent().parent().removeClass("open");
    });*/
    $(".droplist .readmore").click(function () {
        $(".droplist .content.open").removeClass("open");
        $(this).parent().parent().toggleClass("open");
    });
});