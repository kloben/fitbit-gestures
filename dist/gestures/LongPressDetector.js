import { __extends } from "tslib";
import { LongPress } from './LongPress';
import { FindElement } from '../helpers/dom.helper';
var LongPressDetector = /** @class */ (function (_super) {
    __extends(LongPressDetector, _super);
    function LongPressDetector(element, cb, cfg) {
        var _this = _super.call(this, cb, cfg) || this;
        _this.element = FindElement(element);
        _this.element.onmousedown = _this._onMouseDown.bind(_this);
        _this.element.onmouseup = _this._onMouseUp.bind(_this);
        _this.element.onmousemove = _this._onMouseMove.bind(_this);
        return _this;
    }
    return LongPressDetector;
}(LongPress));
export { LongPressDetector };
