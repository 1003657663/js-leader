/**
 * Created by chao on 2016/10/17.
 * 创建引导框上面的指示箭头
 */
define(['tools/setStyle'], function (setStyle) {
    return function () {
        var arrowDiv = document.createElement("div");
        setStyle(arrowDiv, {
            'position': 'absolute',
            'top': '-10px',
            'left': '25px',
            'width':'0',
            'height':'0',
            'border': '5px #fff solid',
            'line-height':'0'
        });
        arrowDiv.className = "arrow";
        return arrowDiv;
    }
});
