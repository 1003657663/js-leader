/**
 * Created by chao on 2016/10/17.
 */
define(function () {
    return function (name, want_) {
        if(want_ === undefined) {
            if (name.indexOf('-')) {
                want_ = true;
            }else{
                want_ = false;
            }
        }
        var reg = /[A-Z]/;
        if(name.charAt(0).match(reg)){//如果第一个字母就是大写，不处理
            return;
        }
        if (want_) {
            //返回带-的命名方法
            if(name.indexOf('-') != -1){
                return name;
            }
            var start = 0;
            var result = [];
            for (var i = 0; i < name.length; i++) {
                if (i == name.length - 1) {
                    result.push(name.substring(start,i+1).toLocaleLowerCase());
                    continue;
                }
                if (name.charAt(i).match(reg)) {
                    result.push(name.substring(start, i).toLocaleLowerCase());
                    start = i;
                }
            }
            return result.join('-');
        } else {
            //返回驼峰命名
            if (name.indexOf('-') == -1) {
                return name;
            } else {
                var tmpArr = name.split('-');
                var result = "";
                for (var i = 0; i < tmpArr.length; i++) {
                    if (i == 0) {
                        result += tmpArr[0];
                        continue;
                    }
                    result += (tmpArr[i].charAt(0).toLocaleUpperCase() + tmpArr[i].substring(1));
                }
                return result;
            }
        }
    }
});
