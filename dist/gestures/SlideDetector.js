import { __extends } from "tslib";
import { FindElement } from '../helpers/dom.helper';
import { Slide } from './Slide';
var SlideDetector = /** @class */ (function (_super) {
    __extends(SlideDetector, _super);
    function SlideDetector(element, cb) {
        var _this = _super.call(this, cb) || this;
        _this.element = FindElement(element);
        _this.element.onmousedown = _this._onMouseDown.bind(_this);
        _this.element.onmouseup = _this._onMouseUp.bind(_this);
        _this.element.onmousemove = _this._onMouseMove.bind(_this);
        return _this;
    }
    return SlideDetector;
}(Slide));
export { SlideDetector };
