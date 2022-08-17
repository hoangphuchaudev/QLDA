//Global variable
var APIWeb_Link = "";
jQuery(document).ready(function () {
    //Lấy data trong file config
    jQuery.getJSON('/sites/library/json/config.json?ver=0.0.2', function (data) {
        APIWeb_Link = data.LinkAPI;
    });

	/*
    *   Show Popup Video & Events
    *   NHHAI - 19/03/2020
    */
    jQuery('.play-video-item').click(function () {
        var _this = jQuery(this);
        var src = _this.attr("src");
        jQuery('body .popup-video-item').remove();
        jQuery('body').append(htmlPopupVideo(src));

        // Sự kiện Click (X) thì đóng Popup Video
        jQuery('.popup-video-item .pvi-close-item').on('click', function () {
            closePopupVideo();
        });

        // Sự kiện nhấn phím ESC thì đóng Popup Video
        jQuery(document).bind('keydown', function (key) {
            if (key.which == 27) {
                closePopupVideo();
            }
        });

        jQuery('.popup-video-item').fadeIn(300);

        return false;
    });
});

/*
*   HTML Popup Video
*   NHHAI - 19/03/2020
*/
function htmlPopupVideo(src) {
    var html = '<div class="popup-video-item">'
        + '<div class="pvi-content-item">'
        + '<div class="pvi-border-item">'
        + '<div class="pvi-close-item"></div>'
        + '<div class="embed-responsive-16by9 embed-responsive">'
        + '<iframe src="' + src + '" allow="autoplay"></iframe>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>';
    return html;
};

/*
*   Hàm Close Popup Video
*   NHHAI - 19/03/2020
*/
function closePopupVideo() {
    var frame = jQuery('.popup-video-item iframe');
    try {
        if (frame) {
            var src = frame.attr('src');
            if (src) {
                if (src.includes("autoplay")) {
                    var arr = src.split("?");
                    if (arr && arr.length > 0) {
                        src = arr[0] + "?autoplay=0";
                        frame.attr('src', src);
                    }
                } else {
                    src += "?autoplay=0"
                    frame.attr('src', src);
                }
            }
            jQuery('.popup-video-item').fadeOut(300);
        }
    } catch (e) {
        console.log(e);
    }
};

/*
 * Gọi AJAX
 * Create by: NTSON - 03/07/2020
 */
function ajaxMethod(method, url, params, callBackFn, async) {
    var objAjax = {
        url: url,
        method: method, //jquery version >= 1.9.0
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        data: params,
        async: (async !== null && async !== undefined) ? async : true,
        timeout: 5000,
        success: function (response) {
            if (callBackFn != undefined && typeof callBackFn === 'function') {
                callBackFn(response);
            }
        },
        error: function () {
            callBackFn(JSON.parse('{"Error":true}'));
        }
    }
    jQuery.ajax(objAjax);
};