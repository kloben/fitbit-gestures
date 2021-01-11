import { SwipeConfig } from './Swipe';
import { DoubleTapConfig } from './DoubleTap';
import { GestureCallback } from './interfaces/gesture-callback.interface';
export interface GestureConfig {
}
export declare class GestureDetector {
    private readonly element;
    private swipe;
    private doubleTap;
    private slide;
    private longPress;
    private callbacks;
    constructor(element: string | Element, cfg?: GestureConfig);
    onSwipe(cb: GestureCallback, cfg?: SwipeConfig): this;
    onDoubleTap(cb: GestureCallback, cfg?: DoubleTapConfig): this;
    onSlide(cb: GestureCallback): this;
    onLongPress(cb: GestureCallback): this;
    private _addListener;
}
