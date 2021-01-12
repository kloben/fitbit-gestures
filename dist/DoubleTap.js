import { GestureType } from './enums/gesture-type.enum';
var DoubleTap = /** @class */ (function () {
    function DoubleTap(cb, cfg) {
        this.cb = cb;
        this.lastTap = null;
        this.interval = (cfg === null || cfg === void 0 ? void 0 : cfg.interval) || 250;
    }
    DoubleTap.prototype._onMouseUp = function (evt) {
        var now = Date.now();
        if (now && now - this.lastTap < 250) {
            this.cb({
                type: GestureType.DoubleTap,
                point: {
                    x: evt.screenX,
                    y: evt.screenY
                }
            });
        }
        this.lastTap = now;
    };
    return DoubleTap;
}());
export { DoubleTap };
