import { __extends } from "tslib";
import { DoubleTap } from "./DoubleTap";
var DoubleTapPrivate = /** @class */ (function (_super) {
    __extends(DoubleTapPrivate, _super);
    function DoubleTapPrivate(callback, cfg) {
        return _super.call(this, callback, cfg) || this;
    }
    DoubleTapPrivate.prototype.onMouseUp = function () {
        _super.prototype._onMouseUp.call(this);
    };
    return DoubleTapPrivate;
}(DoubleTap));
export { DoubleTapPrivate };
