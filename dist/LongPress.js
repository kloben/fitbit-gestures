import { GestureType } from './enums/gesture-type.enum';
var LongPress = /** @class */ (function () {
    function LongPress(cb, cfg) {
        this.cb = cb;
        this.timeout = null;
        this.executed = false;
        this.minTime = (cfg === null || cfg === void 0 ? void 0 : cfg.time) || 300;
        this.threshold = (cfg === null || cfg === void 0 ? void 0 : cfg.time) || 10;
    }
    LongPress.prototype._onMouseDown = function (evt) {
        this._init(evt);
    };
    LongPress.prototype._onMouseMove = function (evt) {
        if (this.executed || !this.startPos) {
            return;
        }
        if (Math.abs(evt.screenX - this.startPos.x) > this.threshold ||
            Math.abs(evt.screenY - this.startPos.y) > this.threshold) {
            this._reset();
            this.executed = true;
        }
    };
    LongPress.prototype._onMouseUp = function () {
        this._reset();
    };
    LongPress.prototype._init = function (evt) {
        this._reset();
        this.timeout = setTimeout(this._execute.bind(this), this.minTime);
        this.startPos = {
            x: evt.screenX,
            y: evt.screenY
        };
    };
    LongPress.prototype._reset = function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.startPos = null;
        this.executed = false;
    };
    LongPress.prototype._execute = function () {
        this.executed = true;
        this.cb({
            type: GestureType.LongPress,
            point: this.startPos
        });
    };
    return LongPress;
}());
export { LongPress };
