import { GestureType } from '../enums/gesture-type.enum';
import { GetPoint, IsInsideThreshold, IsSamePoint } from '../helpers/point.helper';
var Slide = /** @class */ (function () {
    function Slide(cb, cfg) {
        this.cb = cb;
        this.minThreshold = (cfg === null || cfg === void 0 ? void 0 : cfg.threshold) || 10;
    }
    Slide.prototype._onMouseDown = function (evt) {
        this.startPoint = GetPoint(evt);
    };
    Slide.prototype._onMouseMove = function (evt) {
        var movePoint = GetPoint(evt);
        if (!this.startPoint) {
            this.startPoint = movePoint;
        }
        if (IsSamePoint(movePoint, this.startPoint) || IsInsideThreshold(movePoint, this.startPoint, this.minThreshold)) {
            return;
        }
        this.lastPoint = movePoint;
        return this._generateEvent(false, movePoint);
    };
    Slide.prototype._onMouseUp = function (evt) {
        if (!this.lastPoint || !this.startPoint) {
            return;
        }
        var data = this._generateEvent(true, GetPoint(evt));
        this.startPoint = null;
        this.lastPoint = null;
        return data;
    };
    Slide.prototype._generateEvent = function (ended, point) {
        this.cb({
            type: GestureType.Slide,
            ended: ended,
            point: point,
            from: this.startPoint
        });
    };
    return Slide;
}());
export { Slide };
