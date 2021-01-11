import { GESTURE_DIRECTION } from './enums/gesture-direction.enum';
import { GESTURE_TYPE } from './enums/gesture-type.enum';
var Swipe = /** @class */ (function () {
    function Swipe(cb, cfg) {
        this.cb = cb;
        this.initY = 0;
        this.initX = 0;
        this.threshold = (cfg === null || cfg === void 0 ? void 0 : cfg.threshold) || 100;
    }
    Swipe.prototype._onMouseDown = function (evt) {
        this.initY = evt.screenY;
        this.initX = evt.screenX;
    };
    Swipe.prototype._onMouseUp = function (evt) {
        if (!this.initX) {
            return;
        }
        var dir = this.getDirection(evt.screenX - this.initX, evt.screenY - this.initY);
        if (dir) {
            this.cb({
                type: GESTURE_TYPE.swipe,
                dir: dir,
                center: {
                    x: evt.screenX,
                    y: evt.screenY
                },
                from: {
                    x: this.initX,
                    y: this.initY
                }
            });
        }
        this.initX = null;
        this.initY = null;
    };
    Swipe.prototype.getDirection = function (x, y) {
        if (y < -this.threshold) {
            return GESTURE_DIRECTION.up;
        }
        else if (y > this.threshold) {
            return GESTURE_DIRECTION.down;
        }
        else if (x < -this.threshold) {
            return GESTURE_DIRECTION.left;
        }
        else if (x > this.threshold) {
            return GESTURE_DIRECTION.right;
        }
    };
    return Swipe;
}());
export { Swipe };
