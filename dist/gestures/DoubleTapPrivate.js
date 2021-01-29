import { __extends } from "tslib";
import { DoubleTap } from './DoubleTap';
var DoubleTapPrivate = /** @class */ (function (_super) {
    __extends(DoubleTapPrivate, _super);
    function DoubleTapPrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DoubleTapPrivate.prototype.onMouseUp = function (evt) {
        _super.prototype._onMouseUp.call(this, evt);
    };
    return DoubleTapPrivate;
}(DoubleTap));
export { DoubleTapPrivate };
