import document from "document";
var SwipeDetector = /** @class */ (function () {
    function SwipeDetector(element, cfg) {
        if (typeof element === 'string') {
            this.element = document.getElementById(element);
        }
        else {
            this.element = element;
        }
        if (!this.element) {
            throw new Error('Element not found');
        }
    }
    return SwipeDetector;
}());
export { SwipeDetector };
