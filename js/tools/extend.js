/**
 * Created by chao on 2016/10/19.
 * 合并两个对象,第二个参数合并到第一个
 */
define(function () {
    return function (obj1, obj2) {
        if (typeof obj1 != 'object' || typeof  obj2 != 'object') {
            return;
        }
        for (var i in obj2) {
            obj1[i] = obj2[i];
        }
        return obj1;
    }
});
