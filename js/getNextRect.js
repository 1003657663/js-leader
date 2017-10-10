/**
 * Created by chao on 2016/10/18.
 */
define(['getWhichAndLocation','getNextWidthHeight'],function (getWhichAndLocation,getNextWidthHeight) {
    return function (aimElement, leaderBodyObj,nextText) {
        var nextWidthHeight = getNextWidthHeight(nextText,leaderBodyObj);
        var whichAndLocation = getWhichAndLocation(aimElement, leaderBodyObj);
        whichAndLocation.nextLocation.width = nextWidthHeight.width;
        whichAndLocation.nextLocation.height = nextWidthHeight.height;
        return whichAndLocation;
    }

});