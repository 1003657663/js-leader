/**
 * Created by chao on 2016/10/14.
 */
define(['setLocation',
    'lightMask',
    'tools/HandEvent',
    'tools/getLocation'
], function (setLocation, lightMask, HandEvent,getLocation) {
    return {
        maskDiv: null,
        leaderObject: null,
        preButton: null,
        nextButton: null,
        endButton: null,
        texts: null,
        aims: null,
        currentFlag: null,
        config:null,

        init: function (maskDiv, leaderObject, texts, aims,config) {
            this.leaderObject = leaderObject;
            this.preButton = leaderObject.preButton;
            this.nextButton = leaderObject.nextButton;
            this.endButton = leaderObject.endButton;
            HandEvent.addEvent.call(this, this.endButton, 'click', this.close);
            this.texts = texts;
            this.aims = aims;
            this.maskDiv = maskDiv;
            this.config = config;
        },
        appendToBody: function () {
            document.body.appendChild(this.leaderObject.leaderBodyDiv);
            document.body.insertBefore(this.maskDiv,document.body.firstChild);
        },
        buttonChange: function (currentFlag) {
            if (this.aims.length == 1) {
                this.preButton.style.display = "none";
                this.nextButton.style.display = "none";
                this.endButton.style.display = "inline";
                this.endButton.style.float = "none";
            } else if (currentFlag == 0) {
                this.preButton.style.display = "none";
                this.nextButton.style.float = "none";
            } else if (currentFlag == this.aims.length - 1) {
                this.nextButton.style.display = "none";
                this.endButton.style.display = "inline";
                this.endButton.style.float = "right";
            } else {
                this.preButton.style.display = "inline";
                this.nextButton.style.display = "inline";
                this.preButton.style.float = "left";
                this.nextButton.style.float = "right";
                this.endButton.style.display = "none";
            }
        },
        close: function () {
            if (this.maskDiv.remove) {
                this.maskDiv.remove();
                this.leaderObject.leaderBodyDiv.remove();
            } else if (this.maskDiv.removeNode) {
                this.maskDiv.removeNode(true);
                this.leaderObject.leaderBodyDiv.removeNode(true);
            }
            lightMask(this.aims[this.currentFlag], true);
        },
        firstShow: function () {
            this.appendToBody();

            var firstAim = this.aims[0];
            var nextText = this.texts[0];
            this.leaderObject.textDiv.innerHTML = nextText;//插入说明文字
            this.buttonChange(0);
            //初始化位置
            setLocation(firstAim, this.leaderObject, nextText, false);
            this.leaderObject.leaderBodyDiv.style.display = "block";
            //初始化大小
            var textWidth = getLocation(this.leaderObject.textDiv).width;
            textWidth = textWidth < 150 ? 150 :textWidth;
            this.leaderObject.preNextParentDiv.style.width = textWidth + 'px';
            lightMask(firstAim, false);
        },
        hide: function () {
            this.maskDiv.remove();
            this.leaderObject.leaderBodyDiv.remove();
        },
        toggleTo: function (nextFlag) {
            if (nextFlag < 0 || nextFlag >= this.aims.length) {//超出范围
                return;
            }
            this.buttonChange(nextFlag);
            var nextText = this.texts[nextFlag];
            //说明文字，在内部动画结束后插入
            setLocation(this.aims[nextFlag], this.leaderObject, nextText);
            lightMask(this.aims[nextFlag]);
            this.currentFlag = nextFlag;
        }
    }
});
