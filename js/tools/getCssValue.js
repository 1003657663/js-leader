/**
 * Created by chao on 2016/10/17.
 */
define(['tools/propertyNameFormat'],function (propertyNameFormat) {
    return function (element,property) {
        var proValue;
        var _property = propertyNameFormat(property,true);
        property = propertyNameFormat(property,false);
        if(element.style[property] && element.style[property] != ""){
            proValue = element.style[property];
        }else if(window.getComputedStyle){
            proValue = window.getComputedStyle(element,null).getPropertyValue(_property);
        }else if(element.currentStyle){
            proValue = element.currentStyle[property];
        }else if(element.getAttribute){
            proValue = element.getAttribute(property);
        }
        return proValue;
    }
});
