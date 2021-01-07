import { __extends } from "tslib";
import { LongPress } from "./LongPress";
import { findElement } from "./helpers/find-element.helper";
var LongPressDetector = /** @class */ (function (_super) {
    __extends(LongPressDetector, _super);
    function LongPressDetector(element, longPressCallback, cfg) {
        var _this = _super.call(this, longPressCallback, cfg) || this;
        _this.element = findElement(element);
        _this.element.onmousedown = _this._onMouseDown.bind(_this);
        _this.element.onmouseup = _this._onMouseUp.bind(_this);
        return _this;
    }
    return LongPressDetector;
}(LongPress));
export { LongPressDetector };
