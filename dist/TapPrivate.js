import { __extends } from "tslib";
import { Tap } from './Tap';
var TapPrivate = /** @class */ (function (_super) {
    __extends(TapPrivate, _super);
    function TapPrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TapPrivate.prototype.onMouseDown = function (evt) {
        _super.prototype._onMouseDown.call(this, evt);
    };
    return TapPrivate;
}(Tap));
export { TapPrivate };
