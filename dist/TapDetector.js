import { findElement } from "./helpers/find-element.helper";
var TapDetector = /** @class */ (function () {
    function TapDetector(element, tapCallback, cfg) {
        this.tapCallback = tapCallback;
        this.lastTap = null;
        this.element = findElement(element);
        this.threshold = (cfg === null || cfg === void 0 ? void 0 : cfg.threshold) || 250;
        this.element.onmouseup = this._onMouseUp.bind(this);
    }
    TapDetector.prototype._onMouseUp = function (evt) {
        var now = Date.now();
        if (now && now - this.lastTap < 250) {
            this.tapCallback();
        }
        this.lastTap = now;
    };
    return TapDetector;
}());
export { TapDetector };
