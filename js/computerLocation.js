/**
 * Created by chao on 2016/10/19.
 * 通过给定字符串返回相应位置计算结果
 */
define(function () {
    var aimLocation, leaderBodyLocation;

    return {
        aimLocation: null,
        leaderBodyLocation: null,
        init: function (aimLocation, leaderBodyLocation) {
            this.aimLocation = aimLocation;
            this.leaderBodyLocation = leaderBodyLocation;
        },
        get: function (locationStr, locationNum) {
            if (!this.aimLocation || !this.leaderBodyLocation) {
                return;
            }
            //locationType : top center,right center ,bottom center ,left center *** ,top right,top left,right top,right bottom
            //                  bottom left,bottom right,left top,left right,top left,top right

            var Type = {0: 'top', 1: 'right', 2: 'bottom', 3: 'left'};
            if (locationNum != undefined) {
                locationStr = Type[locationNum] + " " + locationStr;
            }
            var nextLocation = {};
            switch (locationStr) {
                case 'top center':
                    nextLocation.left = this.aimLocation.left + (this.aimLocation.width - this.leaderBodyLocation.width) / 2;
                    nextLocation.top = this.aimLocation.top - this.leaderBodyLocation.height - 5;
                    break;
                case 'right center':
                    nextLocation.top = this.aimLocation.top + (this.aimLocation.height - this.leaderBodyLocation.height) / 2;
                    nextLocation.left = this.aimLocation.left + this.aimLocation.width + 5;
                    break;
                case 'bottom center':
                    nextLocation.left = this.aimLocation.left + (this.aimLocation.width - this.leaderBodyLocation.width) / 2;
                    nextLocation.top = this.aimLocation.top + this.aimLocation.height + 5;
                    break;
                case 'left center':
                    nextLocation.top = this.aimLocation.top + (this.aimLocation.height - this.leaderBodyLocation.height) / 2;
                    nextLocation.left = this.aimLocation.left - this.leaderBodyLocation.width - 5;
                    break;
                //-------------------------------------------------------------------------------
                case 'top left':
                    nextLocation.left = this.aimLocation.left + this.aimLocation.width - this.leaderBodyLocation.width + this.aimLocation.right / 4;
                    nextLocation.arrow = this.leaderBodyLocation.width - this.aimLocation.width / 2 - this.aimLocation.right / 4 - 5;
                    nextLocation.top = this.aimLocation.top - this.leaderBodyLocation.height - 5;
                    break;
                case 'top right':
                    nextLocation.left = this.aimLocation.left - this.aimLocation.left / 4;
                    nextLocation.arrow = this.aimLocation.left / 4 + this.aimLocation.width / 2 - 5;
                    nextLocation.top = this.aimLocation.top - this.leaderBodyLocation.height - 5;
                    break;
                case 'right top':
                    nextLocation.top = this.aimLocation.top + this.aimLocation.height - this.leaderBodyLocation.height + this.aimLocation.bottom / 4;
                    nextLocation.arrow = this.leaderBodyLocation.height - this.aimLocation.height / 2 - this.aimLocation.bottom / 4 - 5;
                    nextLocation.left = this.aimLocation.left + this.aimLocation.width + 5;
                    break;
                case 'right bottom':
                    nextLocation.top = this.aimLocation.top - this.aimLocation.top / 4;
                    nextLocation.arrow = this.aimLocation.top / 4 + this.aimLocation.height / 2 - 5;
                    nextLocation.left = this.aimLocation.left + this.aimLocation.width + 5;
                    break;
                case 'bottom left':
                    nextLocation.left = this.aimLocation.left + this.aimLocation.width - this.leaderBodyLocation.width + this.aimLocation.right / 4;
                    nextLocation.arrow = this.leaderBodyLocation.width - this.aimLocation.width / 2 - this.aimLocation.right / 4 - 5;
                    nextLocation.top = this.aimLocation.top + this.aimLocation.height + 5;
                    break;
                case 'bottom right':
                    nextLocation.left = this.aimLocation.left - this.aimLocation.left / 4;
                    nextLocation.arrow = this.aimLocation.left / 4 + this.aimLocation.width / 2 - 5;
                    nextLocation.top = this.aimLocation.top + this.aimLocation.height + 5;
                    break;
                case 'left top':
                    nextLocation.top = this.aimLocation.top + this.aimLocation.height - this.leaderBodyLocation.height + this.aimLocation.bottom / 4;
                    nextLocation.arrow = this.leaderBodyLocation.height - this.aimLocation.height / 2 - this.aimLocation.bottom / 4 - 5;
                    nextLocation.left = this.aimLocation.left -  this.leaderBodyLocation.width - 5;
                    break;
                case 'left bottom':
                    nextLocation.top = this.aimLocation.top - this.aimLocation.top / 4;
                    nextLocation.arrow = this.aimLocation.top / 4 + this.aimLocation.height / 2 - 5;
                    nextLocation.left = this.aimLocation.left -  this.leaderBodyLocation.width - 5;
                    break;
                default:
                    break;
            }
            return nextLocation;
        }
    }
});
