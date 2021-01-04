import { findElement } from "./helpers/find-element.helper";
export var SWIPE_DIR;
(function (SWIPE_DIR) {
    SWIPE_DIR[SWIPE_DIR["UP"] = 0] = "UP";
    SWIPE_DIR[SWIPE_DIR["DOWN"] = 1] = "DOWN";
    SWIPE_DIR[SWIPE_DIR["LEFT"] = 2] = "LEFT";
    SWIPE_DIR[SWIPE_DIR["RIGHT"] = 3] = "RIGHT";
})(SWIPE_DIR || (SWIPE_DIR = {}));
var SwipeDetector = /** @class */ (function () {
    function SwipeDetector(element, swipeCallback, cfg) {
        this.swipeCallback = swipeCallback;
        this.initY = 0;
        this.initX = 0;
        this.element = findElement(element);
        this.threshold = (cfg === null || cfg === void 0 ? void 0 : cfg.threshold) || 100;
        this.element.onmousedown = this._onMouseDown.bind(this);
        this.element.onmouseup = this._onMouseUp.bind(this);
    }
    SwipeDetector.prototype._onMouseDown = function (evt) {
        this.initY = evt.screenY;
        this.initX = evt.screenX;
    };
    SwipeDetector.prototype._onMouseUp = function (evt) {
        var x = evt.screenX - this.initX;
        var y = evt.screenY - this.initY;
        if (y < -this.threshold) {
            this.swipeCallback(SWIPE_DIR.UP);
        }
        else if (y > this.threshold) {
            this.swipeCallback(SWIPE_DIR.DOWN);
        }
        else if (x < -this.threshold) {
            this.swipeCallback(SWIPE_DIR.LEFT);
        }
        else if (x > this.threshold) {
            this.swipeCallback(SWIPE_DIR.RIGHT);
        }
    };
    return SwipeDetector;
}());
export { SwipeDetector };
