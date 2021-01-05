var DoubleTap = /** @class */ (function () {
    function DoubleTap(tapCallback, cfg) {
        this.tapCallback = tapCallback;
        this.lastTap = null;
        this.threshold = (cfg === null || cfg === void 0 ? void 0 : cfg.threshold) || 250;
    }
    DoubleTap.prototype._onMouseUp = function (evt) {
        var now = Date.now();
        if (now && now - this.lastTap < 250) {
            this.tapCallback();
        }
        this.lastTap = now;
    };
    return DoubleTap;
}());
export { DoubleTap };
