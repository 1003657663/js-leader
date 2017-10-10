/**
 * Created by chao on 2016/10/14.
 */
define(['tools/setStyle','tools/extend'],function (setStyle,extend) {
    return function () {
        var preNextParentDiv = document.createElement("div");
        var preButton = document.createElement("button");
        var nextButton = document.createElement("button");
        var endButton = document.createElement("button");

        preButton.innerHTML = "上一步";
        nextButton.innerHTML = "下一步";
        endButton.innerHTML = "结束";

        setStyle(preNextParentDiv,{
            'overflow':'hidden',
            'margin-top':'15px',
            'text-align':'center'
        });
        preNextParentDiv.className = "preNextParent";
        var buttonStyle = {
            'border-radius':'3px',
            'background-color':'#4eb5e6',
            'padding':'5px',
            'border':'none',
            'color':'#fff',
            'cursor':'pointer',
            'margin':'0 auto'
        };
        buttonStyle.float = 'left';
        setStyle(preButton,extend(buttonStyle,{
            'margin-right':'5px'
        }));
        buttonStyle.float = 'right';
        setStyle(nextButton,extend(buttonStyle,{
            'margin-left':'5px'
        }));
        setStyle(endButton,extend(buttonStyle,{'display':'none'}));


        preNextParentDiv.appendChild(preButton);
        preNextParentDiv.appendChild(nextButton);
        preNextParentDiv.appendChild(endButton);
        return {
            'preNextParentDiv':preNextParentDiv,
            'preButton':preButton,
            'nextButton':nextButton,
            'endButton':endButton
        }
    }
});
