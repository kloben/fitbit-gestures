import { GestureType } from './enums/gesture-type.enum';
import { GestureStatus } from './enums/gesture-status.enum';
var Slide = /** @class */ (function () {
    // eslint-disable-next-line no-useless-constructor
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
        return this._generateEvent(GestureStatus.Started, evt);
    };
    Slide.prototype._onMouseUp = function (evt) {
        var data = this._generateEvent(GestureStatus.Ended, evt);
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
        return this._generateEvent(GestureStatus.Moved, evt);
    };
    Slide.prototype._generateEvent = function (status, evt) {
        if (this.startX === null) {
            return;
        }
        this.cb({
            type: GestureType.Slide,
            status: status,
            point: {
                x: evt.screenX,
                y: evt.screenY
            },
            from: {
                x: this.startX,
                y: this.startY
            }
        });
    };
    return Slide;
}());
export { Slide };
