/**
 * Web:  www.agenzzia.com
 * Author: Branko Stevanovic (branko@agenzzia.com)
 * Date: 5/21/2018
 * Time: 7:57 PM
 */
"use strict";
(function(){
    var accordionTrigger  = $('.accordion-trigger');
    var accordionContents  =  $('.accordion-content');

    /**
     * events
     */

    accordionTrigger.click(function(){
        if($(this).parent().find('.accordion-content').hasClass('active')){
            $(this).parent().find('.accordion-content').removeClass('active');
            return;
        }
        else{
            accordionContents.each(function(){
                $(this).removeClass('active');
            });
            $(this).parent().find('.accordion-content').addClass('active');
        }

    })
}());