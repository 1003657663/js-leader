/**
 * Created by chao on 2016/10/18.
 */
define(['tools/getLocation'],function (getLocation) {
    return function (nextText, leaderBodyObject) {
        var bodyDiv = leaderBodyObject.leaderBodyDiv;
        var cloneBodyNode = bodyDiv.cloneNode(true);
        cloneBodyNode.style.display = "none";

        var cloneText = cloneBodyNode.getElementsByTagName('p')[0];
        cloneText.innerHTML = nextText;

        document.body.appendChild(cloneBodyNode);
        var cloneLocation = getLocation(cloneBodyNode,false);
        leaderBodyObject.cloneBodyNodeLocation = getLocation(cloneBodyNode);

        var _parent = cloneBodyNode.parentNode;
        if(_parent) {
            _parent.removeChild(cloneBodyNode);
        }

        return {
            width:cloneLocation.width,
            height:cloneLocation.height
        }
    }
});
