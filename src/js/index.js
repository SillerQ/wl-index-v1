var scroll = new SmoothScroll('a[href*="#"]', {
    /* Selector for links to ignore (must be a valid CSS selector) */
    ignore: '[data-scroll-ignore]',
    /* Selector for fixed headers (must be a valid CSS selector) */
    header: null,

    /*
     Speed & Easing
     */

    /* Integer. How fast to complete the scroll in milliseconds */
    speed: 500,
    /* Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels */
    offset: 0,
    /* Easing pattern to use */
    easing: 'Linear',
    /* Function. Custom easing pattern */
    customEasing: function (time) {
    },


    /*
     Callback API
     */

    /* Callback to run before scroll */
    before: function () {
    },
    /* Callback to run after scroll */
    after: function () {
    }
});
$('ul.tabs .tab').click(function (e) {
    var tab_id = $(this).attr('data-tab');
    var top = ($(this).parent().index() * 44);
    var nextlis = $(this).parent().nextAll()[0];

    $('#selection').css('top', top);
    $('ul.tabs .tab').removeClass('current');
    $('.tab-img div').hide();
    $(this).addClass('current');
    $("#" + tab_id).fadeIn(600);
});