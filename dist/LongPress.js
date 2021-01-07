var LongPress = /** @class */ (function () {
    function LongPress(longPressCallback, cfg) {
        this.longPressCallback = longPressCallback;
        this.timeout = null;
        this.minTime = (cfg === null || cfg === void 0 ? void 0 : cfg.time) || 1500;
    }
    LongPress.prototype._onMouseDown = function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(this.longPressCallback, this.minTime);
    };
    LongPress.prototype._onMouseUp = function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    };
    return LongPress;
}());
export { LongPress };
