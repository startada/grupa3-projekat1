/**
 * User: Agenzzia
 * Web:  www.agenzzia.com
 * Date: 5/31/2017
 * Time: 11:55 AM
 */
"use strict";
(function() {
    var mobileMenuTrigger = $('.navigation-trigger a:last-child');
    var articleContainer = $('.article-container');
    // var articleContent = $('.article-container.half').find('.article-content');
    var articleContent = articleContainer.find('.article-content');
    var articleImage = articleContainer.find('.article-image');
    var higherOne = Number.MIN_VALUE;
    var showMoreButton = $('.load-more-button-container a');

    /**
     * events
     */

    var headerContainer = $('.head-content-wrapper');
    var footerContainer = $('.footer-content-wrapper');

    headerContainer.load('header.html', function() {
        var mobileMenuTrigger = $('.navigation-trigger a:last-child');
        if(utilities.IsExisty(mobileMenuTrigger)){
            mobileMenuTrigger.click(function(ev) {
                var linksContainer = $('.mobile-links-list-container');
                var currentState = linksContainer.css('display');
                linksContainer.slideToggle();
                var icon = $(this).find('i');
                switch(currentState) {
                    case 'none':
                        icon.removeClass();
                        icon.addClass('fa fa-times');
                        // return false;
                        break;
                    case 'block':
                        icon.removeClass();
                        icon.addClass('fa fa-bars');
                        break;
                }

            });
        }
    });
    footerContainer.load('footer.html');
    utilities.MoveExistingImagesToContainerBackgroundCover();

    $(window).load(function() {
        // articleContent.each(function(tanja) {
        //     var tempHeight = $(this).height();
        //
        //     if(tempHeight > higherOne){
        //         higherOne = tempHeight;
        //     }
        //
        // });
        //
        // articleContent.height(higherOne);

        // utilities.EqualizeElementsHeightByRow($('.title.half'));
        // utilities.EqualizeElementsHeightByRow(articleContent);
        articleImage.each(function() {
            var imageUrl = $(this).attr('style').split(';')[0].replace('background-image: url("', '').replace('")', '');
            $(this).append('<i class="fa fa-search-plus"></i>');
            $(this).wrap('<a href="' + imageUrl + '" data-lightbox="minimo" data-title="My caption milojko"></a>')

        });

        $(this).trigger('resize');
    });

    $(window).resize($.throttle(250, function() {
        utilities.EqualizeElementsHeightByRow($('.title.half'));
        utilities.EqualizeElementsHeightByRow(articleContent);
    }));

    showMoreButton.click(function() {
        console.log($(this).html());

        if($(this).html() === 'Load More '){
            $(this).html('Show Less ');
        }
        else {
            $(this).html('Load More ');
        }
        $(this).toggleClass('opened');
        $('.toggle-row').toggleClass('opened');

    });

}());
