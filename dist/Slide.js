import { GESTURE_TYPE } from './enums/gesture-type.enum';
import { GESTURE_STATUS } from './enums/gesture-status.enum';
var Slide = /** @class */ (function () {
    function Slide(cb) {
        this.cb = cb;
        this.startX = null;
        this.lastX = null;
        this.startY = null;
        this.lastY = null;
    }
    Slide.prototype._onMouseDown = function (evt) {
        this.startX = evt.screenX;
        this.startY = evt.screenY;
        this.lastX = evt.screenX;
        this.lastY = evt.screenY;
        return this._generateEvent(GESTURE_STATUS.STARTED, evt);
    };
    Slide.prototype._onMouseUp = function (evt) {
        var data = this._generateEvent(GESTURE_STATUS.ENDED, evt);
        this.startX = null;
        this.startY = null;
        this.lastX = null;
        this.lastY = null;
        return data;
    };
    Slide.prototype._onMouseMove = function (evt) {
        if (this.lastX === evt.screenX && this.lastY === evt.screenY) {
            return;
        }
        this.lastX = evt.screenX;
        this.lastY = evt.screenY;
        return this._generateEvent(GESTURE_STATUS.MOVED, evt);
    };
    Slide.prototype._generateEvent = function (status, evt) {
        if (this.startX === null) {
            return;
        }
        this.cb({
            type: GESTURE_TYPE.slide,
            status: status,
            center: {
                x: this.startX,
                y: this.startY
            },
            from: {
                x: this.lastX,
                y: this.lastY
            }
        });
    };
    return Slide;
}());
export { Slide };
