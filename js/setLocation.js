/**
 * Created by chao on 2016/10/17.
 * 设置提示元素的位置和箭头的位置
 */

define([
    'tools/setStyle',
    'tools/getLocation',
    'getNextRect',
    'setArrowLocation',
    'tools/animation'
], function (setStyle, getLocation, getNextRect, setArrowLocation, animation) {
    return function (aimElement, leaderBodyObj, nextText, needAnimation) {
        var whichAndLocation = getNextRect(aimElement, leaderBodyObj, nextText);
        var which = whichAndLocation.which;
        var leaderBodyLocation = whichAndLocation.leaderBodyLocation;
        var nextLocation = whichAndLocation.nextLocation;

        if (needAnimation || needAnimation === undefined) {
            //设置动画
            animation(leaderBodyObj.leaderBodyDiv, {
                'left': nextLocation.left,
                'top': nextLocation.top,
                'width': nextLocation.width,
                'height': nextLocation.height
            }, 500, function () {
                //结束回调
                setStyle(leaderBodyObj.leaderBodyDiv, {
                    width: 'auto',
                    height: 'auto'
                });
                leaderBodyObj.preNextParentDiv.style.width = nextLocation.width <150?150 + 'px':nextLocation.width+'px';
                setArrowLocation(leaderBodyLocation, leaderBodyObj.arrowDiv, which, nextLocation.arrow);
            }, function () {
                //动画开始前回调
                leaderBodyObj.textDiv.innerHTML = nextText;
            });
        } else {
            setStyle(leaderBodyObj.leaderBodyDiv, {
                'left':nextLocation.left+'px',
                'top':nextLocation.top + 'px'
            });
            setArrowLocation(leaderBodyLocation, leaderBodyObj.arrowDiv, which, nextLocation.arrow);
        }
    };
});

