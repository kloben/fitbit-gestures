import { GestureType } from '../enums/gesture-type.enum';
import { GetPoint, IsInsideThreshold } from '../helpers/point.helper';
var Tap = /** @class */ (function () {
    function Tap(cb, cfg) {
        this.cb = cb;
        this.maxInterval = (cfg === null || cfg === void 0 ? void 0 : cfg.interval) || 250;
        this.maxThreshold = (cfg === null || cfg === void 0 ? void 0 : cfg.threshold) || 10;
    }
    Tap.prototype._onMouseDown = function (evt) {
        this.initialPoint = GetPoint(evt);
        this.initialTime = Date.now();
    };
    Tap.prototype._onMouseUp = function (evt) {
        if (!this.initialTime || !this.initialPoint) {
            return;
        }
        var now = Date.now();
        var finalPoint = GetPoint(evt);
        if (now - this.initialTime <= this.maxInterval && IsInsideThreshold(this.initialPoint, finalPoint, this.maxThreshold)) {
            this.cb({
                type: GestureType.Tap,
                point: finalPoint
            });
        }
        this.initialPoint = null;
        this.initialTime = null;
    };
    return Tap;
}());
export { Tap };
