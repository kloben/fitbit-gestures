import { GestureType } from './enums/gesture-type.enum';
var Tap = /** @class */ (function () {
    // eslint-disable-next-line no-useless-constructor
    function Tap(cb) {
        this.cb = cb;
    }
    Tap.prototype._onMouseUp = function (evt) {
        this.cb({
            type: GestureType.Tap,
            point: {
                x: evt.screenX,
                y: evt.screenY
            }
        });
    };
    return Tap;
}());
export { Tap };
