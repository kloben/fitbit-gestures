import { __extends } from "tslib";
import { LongPress } from "./LongPress";
var LongPressPrivate = /** @class */ (function (_super) {
    __extends(LongPressPrivate, _super);
    function LongPressPrivate(callback, cfg) {
        return _super.call(this, callback, cfg) || this;
    }
    LongPressPrivate.prototype.onMouseDown = function () {
        _super.prototype._onMouseDown.call(this);
    };
    LongPressPrivate.prototype.onMouseUp = function () {
        _super.prototype._onMouseUp.call(this);
    };
    return LongPressPrivate;
}(LongPress));
export { LongPressPrivate };
