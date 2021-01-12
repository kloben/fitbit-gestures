import { Swipe, SwipeConfig } from './Swipe';
import { GestureCallback } from './interfaces/gesture-callback.interface';
export declare class SwipeDetector extends Swipe {
    private readonly element;
    constructor(element: string | Element, cb: GestureCallback, cfg?: SwipeConfig);
}
