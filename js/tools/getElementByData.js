/**
 * Created by chao on 2016/10/14.
 */
define(function () {
    return function (data) {
        var result = [];
        function start(element) {
            var dataset = element.getAttribute(data);
            if (dataset) {
                result.push(element);
            }
            var length = element.children.length;
            if (length != 0) {
                for (var i = 0; i < length; i++) {
                    start(element.children[i]);
                }
            }
        }
        start(document.body);
        return result;
    }
});
