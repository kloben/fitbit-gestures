import { FindElement } from './helpers/dom.helper';
import { SwipePrivate } from './gestures/SwipePrivate';
import { DoubleTapPrivate } from './gestures/DoubleTapPrivate';
import { SlidePrivate } from './gestures/SlidePrivate';
import { LongPressPrivate } from './gestures/LongPressPrivate';
import { TapPrivate } from './gestures/TapPrivate';
var GestureDetector = /** @class */ (function () {
    function GestureDetector(element) {
        this.callbacks = {
            up: null,
            down: null,
            move: null
        };
        this.element = FindElement(element);
        return this;
    }
    GestureDetector.prototype.onTap = function (cb, cfg) {
        this.tap = new TapPrivate(cb, cfg);
        this._addListener('up', this.tap.onMouseUp.bind(this.tap));
        this._addListener('down', this.tap.onMouseDown.bind(this.tap));
        return this;
    };
    GestureDetector.prototype.onDoubleTap = function (cb, cfg) {
        this.doubleTap = new DoubleTapPrivate(cb, cfg);
        this._addListener('up', this.doubleTap.onMouseUp.bind(this.doubleTap));
        return this;
    };
    GestureDetector.prototype.onLongPress = function (cb, cfg) {
        this.longPress = new LongPressPrivate(cb, cfg);
        this._addListener('up', this.longPress.onMouseUp.bind(this.longPress));
        this._addListener('down', this.longPress.onMouseDown.bind(this.longPress));
        this._addListener('move', this.longPress.onMouseMove.bind(this.longPress));
        return this;
    };
    GestureDetector.prototype.onSwipe = function (cb, cfg) {
        this.swipe = new SwipePrivate(cb, cfg);
        this._addListener('up', this.swipe.onMouseUp.bind(this.swipe));
        this._addListener('down', this.swipe.onMouseDown.bind(this.swipe));
        this._addListener('down', this.swipe.onMouseDown.bind(this.swipe));
        return this;
    };
    GestureDetector.prototype.onSlide = function (cb, cfg) {
        this.slide = new SlidePrivate(cb, cfg);
        this._addListener('up', this.slide.onMouseUp.bind(this.slide));
        this._addListener('down', this.slide.onMouseDown.bind(this.slide));
        this._addListener('move', this.slide.onMouseMove.bind(this.slide));
        return this;
    };
    GestureDetector.prototype._addListener = function (action, cb) {
        var _this = this;
        if (!this.callbacks[action]) {
            this.callbacks[action] = [];
            this.element["onmouse" + action] = function (evt) {
                _this.callbacks[action].forEach(function (fn) { return fn(evt); });
            };
        }
        this.callbacks[action].push(cb);
    };
    return GestureDetector;
}());
export { GestureDetector };
