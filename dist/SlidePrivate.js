import { __extends } from "tslib";
import { Slide } from './Slide';
var SlidePrivate = /** @class */ (function (_super) {
    __extends(SlidePrivate, _super);
    function SlidePrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlidePrivate.prototype.onMouseDown = function (evt) {
        _super.prototype._onMouseDown.call(this, evt);
    };
    SlidePrivate.prototype.onMouseUp = function (evt) {
        _super.prototype._onMouseUp.call(this, evt);
    };
    SlidePrivate.prototype.onMouseMove = function (evt) {
        _super.prototype._onMouseMove.call(this, evt);
    };
    return SlidePrivate;
}(Slide));
export { SlidePrivate };
