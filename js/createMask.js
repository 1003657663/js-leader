/**
 * Created by chao on 2016/10/14.
 */
define(['tools/setStyle','tools/getLocation'],function (setStyle,getLocation) {
    return function () {
        var maskDiv = document.createElement("div");
        var windowRect = getLocation(window);
        var maskStyle = {
            'position':'absolute',
            'width':windowRect.width + 'px',
            'height':windowRect.height+'px',
            'opacity':'0.3',
            'backgroundColor':'#000',
            'z-index':'5000',
            'top':'0',
            'left':'0',
            'filter': 'progid:DXImageTransform.Microsoft.Alpha(opacity=30)'
        };
        setStyle(maskDiv,maskStyle);

        return maskDiv;
    }
});