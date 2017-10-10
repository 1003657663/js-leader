/**
 * Created by chao on 2016/10/14.
 */
define([
    'initStyle',
    'Show',
    'getTextsAndAim',
    'tools/HandEvent',
    'tools/initBrowserFunction'
],function (initStyle, Show, getTextsAndAim,HandEvent,initBrowserFunction) {
    return function (config) {
        initBrowserFunction();//补全浏览器兼容性缺失的方法
        var myElement = initStyle();
        var textsAndAim = getTextsAndAim(config);
        var texts = textsAndAim.texts;
        var aims = textsAndAim.aims;
        var currentAim = 0;

        Show.init(myElement.maskDiv,myElement.leaderBody,texts,aims,config);//初始化传入
        var leaderBodyObject = myElement.leaderBody;
        HandEvent.addEvent(leaderBodyObject.preButton,'click',function (e) {
            if(currentAim>0) {
                currentAim--;
                Show.toggleTo(currentAim);
            }
        });
        HandEvent.addEvent(leaderBodyObject.nextButton,'click',function (e) {
            if(currentAim < aims.length -1) {
                currentAim++;
                Show.toggleTo(currentAim);
            }
        });

        return {
            firstShow:function () {
                Show.firstShow();
            }
        }
    }
});