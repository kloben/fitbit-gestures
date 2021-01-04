import document from "document";
export var SWIPE_DIR;
(function (SWIPE_DIR) {
    SWIPE_DIR[SWIPE_DIR["UP"] = 0] = "UP";
    SWIPE_DIR[SWIPE_DIR["DOWN"] = 1] = "DOWN";
    SWIPE_DIR[SWIPE_DIR["LEFT"] = 2] = "LEFT";
    SWIPE_DIR[SWIPE_DIR["RIGHT"] = 3] = "RIGHT";
})(SWIPE_DIR || (SWIPE_DIR = {}));
var SwipeDetector = /** @class */ (function () {
    function SwipeDetector(element, swipeCallback, cfg) {
        this.element = element;
        this.swipeCallback = swipeCallback;
        this.initY = 0;
        this.initX = 0;
        if (typeof element === 'string') {
            this.element = document.getElementById(element);
        }
        else {
            this.element = element;
        }
        if (!this.element) {
            throw new Error('Element not found');
        }
        this.threshold = (cfg === null || cfg === void 0 ? void 0 : cfg.threshold) || 100;
        this.element.onmousedown = this._onMouseDown;
        this.element.onmouseup = this._onMouseUp;
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
