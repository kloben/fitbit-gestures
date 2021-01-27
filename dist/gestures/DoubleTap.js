import { GestureType } from '../enums/gesture-type.enum';
import { GetPoint, IsInsideThreshold } from '../helpers/point.helper';
var DoubleTap = /** @class */ (function () {
    function DoubleTap(cb, cfg) {
        this.cb = cb;
        this.lastTime = null;
        this.maxInterval = (cfg === null || cfg === void 0 ? void 0 : cfg.interval) || 250;
        this.maxThreshold = (cfg === null || cfg === void 0 ? void 0 : cfg.threshold) || 10;
    }
    DoubleTap.prototype._onMouseUp = function (evt) {
        var now = Date.now();
        var actualPoint = GetPoint(evt);
        if (this.lastTime &&
            this.lastPoint &&
            now - this.lastTime <= this.maxInterval &&
            IsInsideThreshold(this.lastPoint, actualPoint, this.maxThreshold)) {
            this.cb({
                type: GestureType.DoubleTap,
                point: actualPoint
            });
            this.lastTime = null;
            this.lastPoint = null;
            return;
        }
        this.lastTime = now;
        this.lastPoint = actualPoint;
    };
    return DoubleTap;
}());
export { DoubleTap };
