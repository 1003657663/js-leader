/**
 * Created by chao on 2016/10/17.
 */
define(function () {
    return function (num) {
        if(typeof num == "number"){
            return true;
        }
        var reg = /^[0-9]*$/g;
        return num.match(reg)!=null;
    }
});
