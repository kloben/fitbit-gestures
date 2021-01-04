import { findElement } from "./helpers/find-element.helper";
var SlideDetector = /** @class */ (function () {
    function SlideDetector(element) {
        this.element = findElement(element);
        this.element.onmousedown = this._onMouseDown.bind(this);
        this.element.onmouseup = this._onMouseUp.bind(this);
    }
    SlideDetector.prototype._onMouseDown = function (evt) {
    };
    SlideDetector.prototype._onMouseUp = function (evt) {
    };
    return SlideDetector;
}());
export { SlideDetector };
