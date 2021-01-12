import { SwipeConfig } from './Swipe';
import { DoubleTapConfig } from './DoubleTap';
import { GestureCallback } from './interfaces/gesture-callback.interface';
export declare class GestureDetector {
    private readonly element;
    private swipe;
    private doubleTap;
    private slide;
    private longPress;
    private tap;
    private callbacks;
    constructor(element: string | Element);
    onTap(cb: GestureCallback): void;
    onDoubleTap(cb: GestureCallback, cfg?: DoubleTapConfig): this;
    onLongPress(cb: GestureCallback): this;
    onSwipe(cb: GestureCallback, cfg?: SwipeConfig): this;
    onSlide(cb: GestureCallback): this;
    private _addListener;
}
