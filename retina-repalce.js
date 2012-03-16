(function($) {
    "use strict";
    
    var retinaReplace = function(element, options) {

        this.options = options;
        var $el = $(element);
        var is_image = $el.is('img');
        var src = is_image ? $el.attr('src') : $el.backgroundImageUrl();        
        var dot_index = src.lastIndexOf('.');
        var extension = src.substr(dot_index + 1);
        var file = src.substr(0, dot_index);
        var image_2x = file + this.options.suffix + '.' + extension;

        $('<img/>').attr('src', image_2x).load(function() {

            if (is_image) {
                $el.attr('src', $(this).attr('src'));
            } else {
                $el.backgroundImageUrl($(this).attr('src'));
            }

            $el.attr('data-retina', 'complete');
        });
    }

    retinaReplace.prototype = {
        constructor: retinaReplace
    }

    $.fn.retinaReplace = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('retinaReplace');
            var options = $.extend({}, $.fn.retinaReplace.defaults, $this.data(), typeof option == 'object' && option);
            if (!data) { $this.data('retinaReplace', (data = new retinaReplace(this, options))); }
            if (typeof option == 'string') { data[option](); }
        });
    }
    
    $.fn.backgroundImageUrl = function(url) {
        return url ? this.each(function () { 
            $(this).css("background-image", 'url("' + url + '")')
        }) : $(this).css("background-image").replace(/url\(|\)|"|'/g, "");
    }

    $.fn.retinaReplace.defaults = {
        suffix: '_2x'
    }

    $.fn.retinaReplace.Constructor = retinaReplace;

    $(function(){
        $("[data-retina='true']").retinaReplace();
    });

})(window.jQuery);