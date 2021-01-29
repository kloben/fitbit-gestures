import { SwipeConfig } from './gestures/Swipe';
import { DoubleTapConfig } from './gestures/DoubleTap';
import { GestureCallback } from './interfaces/gesture-callback.interface';
import { TapConfig } from './gestures/Tap';
import { LongPressConfig } from './gestures/LongPress';
import { SlideConfig } from './gestures/Slide';
export declare class GestureDetector {
    private readonly element;
    private swipe;
    private doubleTap;
    private slide;
    private longPress;
    private tap;
    private callbacks;
    constructor(element: string | Element);
    onTap(cb: GestureCallback, cfg?: TapConfig): this;
    onDoubleTap(cb: GestureCallback, cfg?: DoubleTapConfig): this;
    onLongPress(cb: GestureCallback, cfg?: LongPressConfig): this;
    onSwipe(cb: GestureCallback, cfg?: SwipeConfig): this;
    onSlide(cb: GestureCallback, cfg?: SlideConfig): this;
    private _addListener;
}
