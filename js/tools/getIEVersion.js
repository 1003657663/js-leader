/**
 * Created by chao on 2016/10/20.
 */
define(function () {
    return function () {
        var isIE = !!window.ActiveXObject;
        var isIE6 = isIE && !window.XMLHttpRequest;
        var isIE8 = isIE && !!document.documentMode;
        var isIE7 = isIE && !isIE6 && !isIE8;
        if (isIE) {
            if (isIE6) {
                return 6;
            } else if (isIE8) {
                return 8
            } else if (isIE7) {
                return 7
            }
        }else{
            return false;
        }
    }
})
