$(function () {
    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    positionAllInMiddleElements();

    $(".image-block").hover(function () {
        $(this).find(".overlay").stop();
        $(this).find(".overlay").fadeIn();
    }, function () {
        $(this).find(".overlay").stop();
        $(this).find(".overlay").fadeOut();
    });

    var controller = $.superscrollorama({
        triggerAtCenter: false,
        playoutAnimations: true
    });

    controller.addTween(250, TweenMax.to($("#main-banner-text"), 1, {css:{top:"55rem"}}));
    controller.addTween(800, TweenMax.to($("#main-banner-text"), .5, {css:{opacity:0}}));

    $(window).resize(function () {
        positionAllInMiddleElements();
        controller.triggerCheckAnim();
    });

    $(".image-block, .scroll-fade-in").each (function () {
        var offsetTop = $(this).offset().top;
        controller.addTween(offsetTop - ($(window).height() / 1), TweenMax.from($(this), 0.5, {css:{opacity:0, "margin-top":"50px"}}));
    });


    $('#calendar').fullCalendar({
        timeFormat: 'H:mm',
        displayEventEnd: true,
        timezone: 'Europe/Helsinki',
        googleCalendarApiKey: 'AIzaSyD0cYxQxqUDtyY2JJl8uIfjPAgno2Ts3wI',
        events: {
            googleCalendarId: 'jgp95eh1rc0tsihv81fvgefh6o@group.calendar.google.com',
            className: 'gcal-event'
        }
    })
});

function positionAllInMiddleElements()
{
    $(".in-middle").each(function () {
        $(this).css({
            'top': ($(this).parent().height() / 2) - ($(this).height() / 2),
            'left': ($(this).parent().width() / 2) - ($(this).width() / 2)
        });
    });
}