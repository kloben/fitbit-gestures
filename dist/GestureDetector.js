import { findElement } from "./helpers/find-element.helper";
import { SwipePrivate } from "./SwipePrivate";
import { DoubleTapPrivate } from "./DoubleTapPrivate";
import { SlidePrivate } from "./SlidePrivate";
var GestureDetector = /** @class */ (function () {
    function GestureDetector(element, cfg) {
        this.callbacks = {
            up: null,
            down: null,
            move: null
        };
        this.element = findElement(element);
        return this;
    }
    GestureDetector.prototype.onSwipe = function (cb, cfg) {
        this.swipe = new SwipePrivate(cb, cfg);
        this._addListener('up', this.swipe.onMouseUp.bind(this.swipe));
        this._addListener('down', this.swipe.onMouseDown.bind(this.swipe));
        return this;
    };
    GestureDetector.prototype.onDoubleTap = function (cb, cfg) {
        this.doubleTap = new DoubleTapPrivate(cb, cfg);
        this._addListener('up', this.doubleTap.onMouseUp.bind(this.doubleTap));
        return this;
    };
    GestureDetector.prototype.onSlide = function (cb) {
        this.slide = new SlidePrivate(cb);
        this._addListener('up', this.slide.onMouseUp.bind(this.slide));
        this._addListener('down', this.slide.onMouseDown.bind(this.slide));
        this._addListener('move', this.slide.onMouseMove.bind(this.slide));
        return this;
    };
    GestureDetector.prototype._addListener = function (gesture, cb) {
        var _this = this;
        if (!this.callbacks[gesture]) {
            this.callbacks[gesture] = [];
            this.element["onmouse" + gesture] = function (evt) {
                _this.callbacks[gesture].forEach(function (fn) { return fn(evt); });
            };
        }
        this.callbacks[gesture].push(cb);
    };
    return GestureDetector;
}());
export { GestureDetector };
