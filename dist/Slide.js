export var SLIDE_EVENT;
(function (SLIDE_EVENT) {
    SLIDE_EVENT["STARTED"] = "STARTED";
    SLIDE_EVENT["MOVED"] = "MOVED";
    SLIDE_EVENT["ENDED"] = "ENDED";
})(SLIDE_EVENT || (SLIDE_EVENT = {}));
var Slide = /** @class */ (function () {
    function Slide(slideCallback) {
        this.slideCallback = slideCallback;
        this.startX = null;
        this.lastX = null;
        this.startY = null;
        this.lastY = null;
    }
    Slide.prototype._onMouseDown = function (evt) {
        this.startX = evt.screenX;
        this.startY = evt.screenY;
        return this._generateEvent(SLIDE_EVENT.STARTED, evt);
    };
    Slide.prototype._onMouseUp = function (evt) {
        var data = this._generateEvent(SLIDE_EVENT.ENDED, evt);
        this.startX = null;
        this.startY = null;
        this.lastX = null;
        this.lastY = null;
        return data;
    };
    Slide.prototype._onMouseMove = function (evt) {
        this.lastX = evt.screenX;
        this.lastY = evt.screenY;
        return this._generateEvent(SLIDE_EVENT.MOVED, evt);
    };
    Slide.prototype._generateEvent = function (type, evt) {
        if (this.startX === null || (this.startX === this.lastX && this.startY === this.lastY)) {
            return;
        }
        this.slideCallback({
            type: type,
            x: {
                from: this.startX,
                to: evt.screenX
            },
            y: {
                from: this.startY,
                to: evt.screenY
            }
        });
    };
    return Slide;
}());
export { Slide };
