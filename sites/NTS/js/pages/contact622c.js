/**
 * JS trang Liên hệ
 * Create by: NTSON - 03/07/2020
 */
jQuery(document).ready(function () {

    ActionSendContact();

});

/**
 * Custom validate HTML5 kiểu số điện thoại
 * Create by: NTSON - 03/07/2020
 */
function validationTypePhone(textbox) {
    var regex = /((03|05|07|08|09)+([0-9]{8})\b)/g;
    var phone = textbox.value.replace(/\s+/g, '');
    if (regex.test(phone)) {
        textbox.setCustomValidity('');
        return true;
    } else {
        textbox.setCustomValidity('Số điện thoại không hợp lệ.');
    }
    return false;
}

/**
 * Sự kiện nhấn nút gửi Yêu cầu
 * Create by: NTSON - 03/07/2020
 */
function ActionSendContact() {
    jQuery('#frmSendContact').submit(function (e) {
        e.preventDefault();

        var fullName = jQuery("#txtFullName").val();
        var phone = jQuery("#txtPhone").val();
        var email = jQuery("#txtEmail").val();
        var requireTypeID = jQuery("#opRequireType").val();
        var requireDetail = jQuery("#txtRequireDetail").val();

        if (fullName != '' && phone != '' && email != '' && requireTypeID != '') {
            var param = {
                "strFullName": fullName,
                "strPhone": phone,
                "strEmail": email,
                "strRequireTypeID": requireTypeID,
                "strRequireDetail": requireDetail
            };

            Loader.show();
            setTimeout(function () {
                ajaxMethod('POST', APIWeb_Link + '/api/bumas/SendRequireEmail', JSON.stringify(param), function resultRegister(result) {
                    var title, des;

                    if (result.success) {
                        title = "Gửi yêu cầu <span class=\"nowrap\">thành công</span>";
                        des = "Chúng tôi sẽ phản hồi trong thời gian <span class=\"nowrap-item\">sớm nhất.</span>";
                        PopupResult.show(title, des)
                        jQuery('#frmSendContact')[0].reset();
                    } else {
                        title = "Gửi yêu cầu không <span class=\"nowrap\">thành công</span>";
                        des = "Đã có lỗi xảy ra trong quá trình gửi yêu cầu. Xin vui lòng thử <span class=\"nowrap-item\">lại sau.</span>";
                        PopupResult.show(title, des)
                    }
                }, false);
                Loader.hide();
            }, 300);
        }
    });
}

/**
 * Màn hình loader
 * Create by: NTSON - 03/07/2020
 */
var Loader = {

    //Show màn hình
    show: function () {
        jQuery('body').prepend('<div class="loader-item"></div>');
    },

    //Ẩn màn hình
    hide: function () {
        jQuery('.loader-item').remove();
    }
};

/**
* Popup show kết quả đăng ký
* Create by: NTSON - 03/07/2020
*/
var PopupResult = {

    //Show
    show: function (title, description) {
        if (title != '' && description != '') {
            var html = '<div class="popup-wrap">'
                + '<div class="popup-box">'
                + '<div class="popup-box-title">'
                + title
                + '</div>'
                + '<div class="popup-box-des">'
                + description
                + '</div >'
                + '<div class="cls-button-popup">'
                + '<a id="btnClosePopup">Đóng</a>'
                + '</div>'
                + '</div>'
                + '</div>';

            jQuery('body').append(html);
            jQuery('.popup-wrap').fadeIn(300);
            this.close();
        }
    },

    //Close
    close: function () {
        jQuery('#btnClosePopup').on('click', function () {
            jQuery('.popup-wrap').fadeOut(300);
            jQuery('.popup-wrap').remove();
        });
    }
}