import { __extends } from "tslib";
import { findElement } from "./helpers/find-element.helper";
import { Swipe } from "./Swipe";
var SwipeDetector = /** @class */ (function (_super) {
    __extends(SwipeDetector, _super);
    function SwipeDetector(element, swipeCallback, cfg) {
        var _this = _super.call(this, swipeCallback, cfg) || this;
        _this.element = findElement(element);
        _this.element.onmousedown = _this._onMouseDown.bind(_this);
        _this.element.onmouseup = _this._onMouseUp.bind(_this);
        return _this;
    }
    return SwipeDetector;
}(Swipe));
export { SwipeDetector };
