/**
 * Created by chao on 2016/10/18.
 */
define(function () {
    return {
        addEvent:function (element,type,fun) {
            var _this = this;
            var _fun = function (e) {
                e = e || window.event;
                if(typeof fun == "function"){
                    fun.call(_this,e);
                }
            };
            if(element["on"+type] === undefined){
                return;
            }
            if(element.addEventListener){
                element.addEventListener(type,_fun);
                return;
            }
            if(element.attachEvent){
                element.attachEvent("on"+type,_fun);
                return;
            }
        },
        delEvent:function (element, type, fun) {
            if(element["on"+type] == undefined){
                return;
            }
            if(element.removeEventListener){
                element.removeEventListener(type,fun);
                return;
            }
            if(element.detachEvent){
                element.detachEvent("on"+type,fun);
                return;
            }
        }
    }
});
