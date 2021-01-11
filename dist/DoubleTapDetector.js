import { __extends } from "tslib";
import { findElement } from './helpers/find-element.helper';
import { DoubleTap } from './DoubleTap';
var DoubleTapDetector = /** @class */ (function (_super) {
    __extends(DoubleTapDetector, _super);
    function DoubleTapDetector(element, cb, cfg) {
        var _this = _super.call(this, cb, cfg) || this;
        _this.element = findElement(element);
        _this.element.onmouseup = _this._onMouseUp.bind(_this);
        return _this;
    }
    return DoubleTapDetector;
}(DoubleTap));
export { DoubleTapDetector };
