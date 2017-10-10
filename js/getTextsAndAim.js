/**
 * Created by chao on 2016/10/14.
 */
define(['tools/getElementByData','tools/isNum'],function (getElementByData,isNum) {
    return function (config) {
        var dataLeader = getElementByData('data-leader');
        var length = dataLeader.length;
        var dataTexts;
        var dataAim = [];

        for(var i=0;i<length;i++){
            var tem = dataLeader[i].getAttribute("data-leader");
            if(tem == "texts"){
                dataTexts = dataLeader[i];
                dataTexts.style.display = 'none';
            }else if(isNum(tem)){
                dataLeader[i].leaderNum = parseInt(tem);
                dataAim.push(dataLeader[i]);
            }
        }

        if(config.texts && config.texts.length > 0) {
            dataTexts = config.texts;
        }else {
            dataTexts = document.getElementsByTagName("li");
            var tem = [];
            for (i = 0; i < dataTexts.length; i++) {
                tem.push(dataTexts[i].innerHTML);
            }
            dataTexts = tem;
        }
        return {
            'texts':dataTexts,
            'aims':dataAim
        }
    }
});