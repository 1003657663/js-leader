/**
 * Created by chao on 2016/10/17.
 * 获取元素在屏幕中的位置，相对于屏幕的左上角
 */
define(['tools/getCssValue'], function (getCssValue) {
    return function (element, withpadding) {
        var windowWidth = document.documentElement.clientWidth;
        var windowHeight = document.documentElement.clientHeight;

        if(element === window || element === window.document){//可以获取窗口的宽高
            return {
                'width':windowWidth,
                'height':windowHeight
            }
        }

        var temObj = {};
        if (getCssValue(element, 'display') == 'none') {
            temObj.display = "none";
            temObj.visibility = getCssValue(element, 'visibility');
            temObj.position = getCssValue(element, 'position');

            element.style.visibility = "hidden";
            element.style.position = "absolute";
            element.style.display = "block";
        }


        var location = element.getBoundingClientRect();
        var clientTop = document.documentElement.clientTop;
        var clientLeft = document.documentElement.clientLeft;

        var rect = {
            'top': location.top - clientTop,
            'left': location.left - clientLeft,
            'bottom': location.bottom,
            'right': location.right
        };
        rect.width = element.width || rect.right - rect.left;
        rect.height = element.height || rect.bottom - rect.top;
        rect.bottom = windowHeight - rect.bottom;
        rect.right = windowWidth - rect.right;

        if (withpadding == false) {
            var padding = getCssValue(element, 'padding').split(' ');
            if (padding.length == 1) {
                rect.width -= parseFloat(padding[0]) * 2;
                rect.height -= parseFloat(padding[0]) * 2;
            } else if (padding.length == 2) {
                rect.width -= parseFloat(padding[0]) * 2;
                rect.width -= parseFloat(padding[1]) * 2;
            } else if (padding.length == 4) {
                rect.width -= parseFloat(padding[1]) + parseFloat(padding[3]);
                rect.height -= parseFloat(padding[0]) + parseFloat(padding[2]);
            }
        }

        if (temObj.display && temObj.display == "none") {
            for (var i in temObj) {
                element.style[i] = temObj[i];
            }
        }

        return rect;
    }
});
