/**
 * Created by chao on 2016/10/17.
 * 设置箭头的位置
 */
define(['tools/setStyle','tools/getIEVersion','tools/extend'], function (setStyle,getIEVersion,extend) {
    return function getArrowLocation(leaderBodyLocation, arrowDiv, whichLocation,offset) {
        var ieVersion = getIEVersion();
        //上右下左，0123
        //offset偏移量
        setStyle(arrowDiv, {
            'top': '',
            'left': '',
            'right': '',
            'bottom': ''
        });

        var borderStyle = {
            'border-left-color': 'transparent',
            'border-right-color': 'transparent',
            'border-bottom-color': 'transparent',
            'border-top-color': 'transparent'
        };
        if(ieVersion == 6){
            borderStyle = extend(borderStyle,{
                'border-top-color': 'tomato',
                'border-left-color': 'tomato',
                'border-right-color': 'tomato',
                'border-bottom-color': 'tomato',
                'filter':'chroma(color=tomato)'
            });
        }
        var offsetObj = {
            leftOffset:offset || leaderBodyLocation.width / 2 - 5,
            topOffset:offset || leaderBodyLocation.height / 2 - 5
        };
        switch (whichLocation) {
            case 0:
                arrowDiv.style.left = offsetObj.leftOffset + 'px';
                arrowDiv.style.bottom = '-10px';
                //设置箭头透明度
                borderStyle['border-top-color'] = "#fff";
                setStyle(arrowDiv, borderStyle);
                break;
            case 1:
                arrowDiv.style.top = offsetObj.topOffset + 'px';
                arrowDiv.style.left = '-10px';
                //设置箭头透明度
                borderStyle['border-right-color'] = "#fff";
                setStyle(arrowDiv, borderStyle);
                break;
            case 2:
                arrowDiv.style.left = offsetObj.leftOffset + 'px';
                arrowDiv.style.top = '-10px';
                //设置箭头透明度
                borderStyle['border-bottom-color'] = "#fff";
                setStyle(arrowDiv, borderStyle);
                break;
            case 3:
                arrowDiv.style.top = offsetObj.topOffset + 'px';
                arrowDiv.style.right = '-10px';
                //设置箭头透明度
                borderStyle['border-left-color'] = "#fff";
                setStyle(arrowDiv, borderStyle);
                break;
        }
    }
});
