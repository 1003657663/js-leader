/**
 * Created by chao on 2016/10/14.
 */
define(['tools/setStyle',
    'createPreNextButton',
    'createArrow',
    'tools/extend'
],function (setStyle,createPreNextButton,createArrow,extend) {
    return function () {
        //创建body div，设置body div样式
        var leaderBodyDiv = document.createElement("div");
        var divStyle = {
            'position':'absolute',
            'padding':'10px',
            'border-radius':'8px',
            'background-color':'#fff',
            'display':'none',
            'zIndex':'5002',
            'minWidth':'110px',
            'maxWidth':'450px'
        };
        setStyle(leaderBodyDiv,divStyle);
        var textDiv = document.createElement("p");
        setStyle(textDiv,{
            'margin':'0',
            'wordBreak':'break-all',
            'wordWrap':'break-word',
            'display':'inline'
        });
        var preNext = createPreNextButton();//创建pre，next button
        var arrowDiv = createArrow();

        leaderBodyDiv.appendChild(arrowDiv);
        leaderBodyDiv.appendChild(textDiv);
        leaderBodyDiv.appendChild(preNext.preNextParentDiv);

        return extend({
            'leaderBodyDiv':leaderBodyDiv,
            'textDiv':textDiv,
            'arrowDiv':arrowDiv
        },preNext);
    }
});
