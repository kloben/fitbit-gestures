import document from 'document';
export function FindElement(element) {
    var el;
    if (typeof element === 'string') {
        el = document.getElementById(element);
    }
    else if (typeof element === 'object') {
        el = element;
    }
    if (!el) {
        throw new Error('Element not found');
    }
    return el;
}
