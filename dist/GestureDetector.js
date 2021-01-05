var GestureDetector = /** @class */ (function () {
    function GestureDetector(element, cfg) {
        this.upFunctions = null;
        this.downFunctions = null;
        this.moveFunctions = null;
        return this;
    }
    GestureDetector.prototype._initUp = function () {
        var _this = this;
        this.element.onmouseup = function (evt) {
            _this.upFunctions.forEach(function (fn) { return fn(evt); });
        };
    };
    GestureDetector.prototype.onSwipe = function (swipeCallback, swipeCfg) {
        //add event listener
        return this;
    };
    GestureDetector.prototype.onDoubleTap = function (doubleTapCallback, doubleTapCfg) {
        //add event listener
        return this;
    };
    return GestureDetector;
}());
export { GestureDetector };
