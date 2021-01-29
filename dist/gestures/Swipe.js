import { GestureType } from '../enums/gesture-type.enum';
import { GetDirection, GetPoint } from '../helpers/point.helper';
var Swipe = /** @class */ (function () {
    function Swipe(cb, cfg) {
        this.cb = cb;
        this.minThreshold = (cfg === null || cfg === void 0 ? void 0 : cfg.threshold) || 100;
    }
    Swipe.prototype._onMouseDown = function (evt) {
        this.startPoint = GetPoint(evt);
    };
    Swipe.prototype._onMouseMove = function (evt) {
        if (!this.startPoint) {
            this.startPoint = GetPoint(evt);
        }
    };
    Swipe.prototype._onMouseUp = function (evt) {
        if (!this.startPoint) {
            return;
        }
        var finalPoint = GetPoint(evt);
        var dir = GetDirection(this.startPoint, finalPoint, this.minThreshold);
        if (dir) {
            this.cb({
                type: GestureType.Swipe,
                dir: dir,
                point: finalPoint,
                from: this.startPoint
            });
        }
        this.startPoint = null;
    };
    return Swipe;
}());
export { Swipe };
