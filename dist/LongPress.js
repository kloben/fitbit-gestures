var LongPress = /** @class */ (function () {
    function LongPress(longPressCallback, cfg) {
        this.longPressCallback = longPressCallback;
        this.executed = false;
        this.timeout = null;
        this.minTime = (cfg === null || cfg === void 0 ? void 0 : cfg.time) || 300;
        this.threshold = (cfg === null || cfg === void 0 ? void 0 : cfg.time) || 10;
    }
    LongPress.prototype._onMouseDown = function (evt) {
        console.log('DOWN');
        this._init(evt);
    };
    LongPress.prototype._onMouseMove = function (evt) {
        console.log('MOVE');
        if (this.executed) {
            console.log('MOVE skip');
            return;
        }
        if (Math.abs(evt.screenX - this.startPos.x) > this.threshold ||
            Math.abs(evt.screenY - this.startPos.y) > this.threshold) {
            console.log('MOVE reset');
            this._init(evt);
        }
    };
    LongPress.prototype._onMouseUp = function () {
        console.log('UP');
        this._reset();
    };
    LongPress.prototype._init = function (evt) {
        this._reset();
        this.timeout = setTimeout(this._execute.bind(this), this.minTime);
        this.startPos = { x: evt.screenX, y: evt.screenY };
    };
    LongPress.prototype._reset = function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.startPos = null;
        this.executed = false;
    };
    LongPress.prototype._execute = function () {
        console.log('EXECUTE');
        this.executed = true;
        this.longPressCallback();
    };
    return LongPress;
}());
export { LongPress };
