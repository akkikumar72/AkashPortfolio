// ------------------------------
// MASONRY - ISOTOPE
function setupMasonry() {

    var masonry = $('.masonry, .gallery');
    if (masonry.length) {
        masonry.each(function(index, el) {

            // call isotope
            refreshMasonry();
            $(el).imagesLoaded(function() {
                $(el).isotope({
                    layoutMode : $(el).data('layout') ? $(el).data('layout') : 'masonry'
                });
                // set columns
                refreshMasonry();
            });

            // filters
            if (!$(el).data('isotope')) {
                var filters = $(el).siblings('.filters');
                if(filters.length) {
                    filters.find('a').on("click", function() {
                        var selector = $(this).attr('data-filter');
                        $(el).isotope({ filter: selector });
                        $(this).parent().addClass('current').siblings().removeClass('current');
                        return false;
                    });
                }
            }

        }); //each
        $(window).on('resize debouncedresize', function() {
            setTimeout(function() { refreshMasonry(); }, 100);
        });
    }
}
// ------------------------------

// ------------------------------
// REFRSH MASONRY - ISOTOPE
function refreshMasonry() {

    var masonry = $('.masonry');
    if (masonry.length) {
        masonry.each(function(index, el) {

            // check if isotope initialized
            if ($(el).data('isotope')) {

                var itemW = $(el).data('item-width');
                var containerW = $(el).width();
                var items = $(el).children('.hentry');
                var columns = Math.round(containerW/itemW);

                // set the widths (%) for each of item
                items.each(function(index, element) {
                    var multiplier = $(this).hasClass('x2') && columns > 1 ? 2 : 1;
                    var itemRealWidth = (Math.floor( containerW / columns ) * 100 / containerW) * multiplier ;
                    $(this).css( 'width', itemRealWidth + '%' );
                });

                var columnWidth = Math.floor( containerW / columns );

                $(el).isotope( 'option', { masonry: { columnWidth: columnWidth } } );
                $(el).isotope('layout');
            }

        }); //each
    }

}
// ------------------------------