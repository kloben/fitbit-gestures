import { __extends } from "tslib";
import { findElement } from "./helpers/find-element.helper";
import { Slide } from "./Slide";
var SlideDetector = /** @class */ (function (_super) {
    __extends(SlideDetector, _super);
    function SlideDetector(element, slideCallback, cfg) {
        var _this = _super.call(this, slideCallback, cfg) || this;
        _this.element = findElement(element);
        _this.element.onmousedown = _this._onMouseDown.bind(_this);
        _this.element.onmouseup = _this._onMouseUp.bind(_this);
        _this.element.onmousemove = _this._onMouseMove.bind(_this);
        return _this;
    }
    return SlideDetector;
}(Slide));
export { SlideDetector };
