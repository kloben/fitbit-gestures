import { __extends } from "tslib";
import { Swipe } from "./Swipe";
var PrivateSwipeDetector = /** @class */ (function (_super) {
    __extends(PrivateSwipeDetector, _super);
    function PrivateSwipeDetector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrivateSwipeDetector.prototype.onMouseDown = function (evt) {
        _super.prototype._onMouseDown.call(this, evt);
    };
    PrivateSwipeDetector.prototype.onMouseUp = function (evt) {
        _super.prototype._onMouseUp.call(this, evt);
    };
    return PrivateSwipeDetector;
}(Swipe));
export { PrivateSwipeDetector };
