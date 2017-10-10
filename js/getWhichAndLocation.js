/**
 * Created by chao on 2016/10/17.
 */
define(['tools/setStyle',
    'tools/getLocation',
    'computerLocation'
], function (setStyle, getLocation, computerLocation) {
    return function (aimElement, leaderBodyObj) {
        var aimLocation = getLocation(aimElement);
        var leaderBodyLocation = leaderBodyObj.cloneBodyNodeLocation;
        computerLocation.init(aimLocation, leaderBodyLocation);

        //默认显示在最下方
        var hasOk = false;
        var endLocation = {};
        if (aimLocation.left > (leaderBodyLocation.width - aimLocation.width) / 2 &&
            aimLocation.right > (leaderBodyLocation.width - aimLocation.width) / 2) {
            if (aimLocation.bottom > leaderBodyLocation.height) {
                //下方
                hasOk = true;
                endLocation.which = 2;
            } else if (aimLocation.top > leaderBodyLocation.height) {
                //上方
                hasOk = true;
                endLocation.which = 0;
            }
        } else if (aimLocation.top > (leaderBodyLocation.height - aimLocation.height) / 2 &&
            aimLocation.bottom > (leaderBodyLocation.height - aimLocation.height) / 2) {
            if (aimLocation.left > leaderBodyLocation.width) {
                //左方
                hasOk = true;
                endLocation.which = 3;

            } else if (aimLocation.right > leaderBodyLocation.width) {
                //右方
                hasOk = true;
                endLocation.which = 1;
            }
        }

        if (!hasOk) {
            var distanceSort = [
                {id: 0, name: 'top', leng: aimLocation.top},
                {id: 1, name: 'right', leng: aimLocation.right},
                {id: 2, name: 'bottom', leng: aimLocation.bottom},
                {id: 3, name: 'left', leng: aimLocation.left}
            ];
            distanceSort.sort(function (a, b) {
                return b.leng - a.leng;
            });
            endLocation.which = distanceSort[0].id;
        }
        //计算下一个位置nextLOcation
        var nextLocation = {};
        if (hasOk) {
            nextLocation = computerLocation.get('center', endLocation.which);
        } else {
            //没有空间显示,偏移显示,,箭头偏移arrow
            switch (endLocation.which) {
                //上，下
                case 0:
                case 2:
                    if(aimLocation.width >= leaderBodyLocation.width){
                        nextLocation = computerLocation.get('center',endLocation.which);
                    }else if (aimLocation.left > aimLocation.right) {
                        //left
                        nextLocation = computerLocation.get('left',endLocation.which);
                    } else {
                        nextLocation = computerLocation.get('right',endLocation.which);
                    }
                    break;
                //右，左
                case 1:
                case 3:
                    if(aimLocation.height >= leaderBodyLocation.height){
                        nextLocation = computerLocation.get('center',endLocation.which);
                    }else if (aimLocation.top > aimLocation.bottom) {
                        nextLocation = computerLocation.get('top',endLocation.which);
                    } else {
                        nextLocation = computerLocation.get('bottom',endLocation.which);
                    }
                    break;
            }
        }
        return {
            'which': endLocation.which,
            'aimLocation': aimLocation,
            'leaderBodyLocation': leaderBodyLocation,
            'nextLocation': nextLocation
        }
    };

});