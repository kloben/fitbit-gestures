import { DoubleTap, DoubleTapConfig } from './DoubleTap';
import { GestureCallback } from '../interfaces/gesture-callback.interface';
export declare class DoubleTapDetector extends DoubleTap {
    private readonly element;
    constructor(element: string | Element, cb: GestureCallback, cfg?: DoubleTapConfig);
}
