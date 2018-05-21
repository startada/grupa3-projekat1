/**
 * Web:  www.agenzzia.com
 * Author: Branko Stevanovic (branko@agenzzia.com)
 * Date: 5/16/2018
 * Time: 8:07 PM
 */
"use strict";

(function() {
    var navigationLink = $('.v-main-navigation').find('a');
    console.log(navigationLink);
    var active = 0;

    navigationLink.click(function(ev) {
        var target = $(this).attr('data-target');
        var index = $(this).parent().index();
        var offset = Math.abs(index -active);
        console.log(offset);
        $('html, body').animate({
                'scroll-top':$(target).offset().top -80
            },500 * offset
        );
        active = index;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){
            $('.v-main-navigation').addClass('shrinked')
        }
        else{
            $('.v-main-navigation').removeClass('shrinked')
        }
    });
}());

