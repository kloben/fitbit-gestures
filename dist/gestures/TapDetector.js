import { __extends } from "tslib";
import { FindElement } from '../helpers/dom.helper';
import { Tap } from './Tap';
var TapDetector = /** @class */ (function (_super) {
    __extends(TapDetector, _super);
    function TapDetector(element, cb) {
        var _this = _super.call(this, cb) || this;
        _this.element = FindElement(element);
        _this.element.onmouseup = _this._onMouseUp.bind(_this);
        _this.element.onmousedown = _this._onMouseDown.bind(_this);
        return _this;
    }
    return TapDetector;
}(Tap));
export { TapDetector };
