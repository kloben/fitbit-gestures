import { SwipeCallback, SwipeConfig } from "./Swipe";
import { DoubleTapCallback, DoubleTapConfig } from "./DoubleTap";
import { SlideCallback, SlideConfig } from "./Slide";
export interface GestureConfig {
}
export declare class GestureDetector {
    private readonly element;
    private swipe;
    private doubleTap;
    private slide;
    private callbacks;
    constructor(element: string | Element, cfg?: GestureConfig);
    onSwipe(cb: SwipeCallback, cfg?: SwipeConfig): this;
    onDoubleTap(cb: DoubleTapCallback, cfg?: DoubleTapConfig): this;
    onSlide(cb: SlideCallback, cfg?: SlideConfig): this;
    private _addListener;
}
