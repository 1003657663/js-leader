/**
 * Created by chao on 2016/10/14.
 * 初始化所需元素，并赋予初始样式
 * 包括，提示框元素，蒙版元素
 */
define(['initLeaderBody','createMask'],function (initLeaderBody,createMask) {
    return function () {
        //创建初始化样式
        var style = document.createElement(style);
        style.innerHTML = ".arrow:{_filter:chroma(color=tomato);}";
        document.getElementsByTagName('head')[0].appendChild(style);
        return {
            'leaderBody':initLeaderBody(),
            'maskDiv':createMask()
        }
    }
});
