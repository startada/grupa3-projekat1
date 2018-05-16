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

    navigationLink.click(function(ev) {
        var target = $(this).attr('data-target');
        var index = $(this).parent().index();
        $('html, body').animate({
                'scroll-top':$(target).offset().top -30
            },500 * (index+1)
        )
    });
}());

