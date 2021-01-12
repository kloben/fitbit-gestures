import { __extends } from "tslib";
import { findElement } from './helpers/find-element.helper';
import { Tap } from './Tap';
var TapDetector = /** @class */ (function (_super) {
    __extends(TapDetector, _super);
    function TapDetector(element, cb) {
        var _this = _super.call(this, cb) || this;
        _this.element = findElement(element);
        _this.element.onmousedown = _this._onMouseDown.bind(_this);
        return _this;
    }
    return TapDetector;
}(Tap));
export { TapDetector };
