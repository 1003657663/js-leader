/**
 * Created by chao on 2016/10/18.
 */
define([
    'tools/setStyle',
    'tools/getCssValue',
    'tools/getLocation',
    'tools/animation'
], function (setStyle, getCssValue, getLocation, animation) {
    var lightElement;
    var beforeProperty = {};
    return function (aimElement, isOff, needAnimation) {
        if (isOff) {
            if (lightElement) {
                setStyle(lightElement, {
                    'position': beforeProperty.position,
                    'background': beforeProperty.backgroundColor,
                    'z-index': beforeProperty.zIndex
                });
            }
        } else {
            //创建元素蒙版----test
            var div = document.createElement("div");
            setStyle(div, {});
            div.style.opacity = '0.3';
            //----------test end-----

            if (lightElement) {
                setStyle(lightElement, {
                    'position': beforeProperty.position,
                    'background': beforeProperty.backgroundColor,
                    'z-index': beforeProperty.zIndex
                });
            }

            beforeProperty.position = getCssValue(aimElement, 'position');
            beforeProperty.backgroundColor = getCssValue(aimElement, 'background-color');
            beforeProperty.zIndex = getCssValue(aimElement, 'z-index');

            if (beforeProperty.position == "fixed" || beforeProperty.position == "absolute" ||
                beforeProperty.position == "relative") {
                setStyle(aimElement, {
                    'backgroundColor': '#fff',
                    'z-index': '5001'
                });
            } else {
                setStyle(aimElement, {
                    'position': 'relative',
                    'backgroundColor': '#fff',
                    'z-index': '5001'
                });
            }
            //动画设置

            lightElement = aimElement;
        }
    }
});
