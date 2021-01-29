import { __extends } from "tslib";
import { Swipe } from './Swipe';
var SwipePrivate = /** @class */ (function (_super) {
    __extends(SwipePrivate, _super);
    function SwipePrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwipePrivate.prototype.onMouseDown = function (evt) {
        _super.prototype._onMouseDown.call(this, evt);
    };
    SwipePrivate.prototype.onMouseMove = function (evt) {
        _super.prototype._onMouseMove.call(this, evt);
    };
    SwipePrivate.prototype.onMouseUp = function (evt) {
        _super.prototype._onMouseUp.call(this, evt);
    };
    return SwipePrivate;
}(Swipe));
export { SwipePrivate };
