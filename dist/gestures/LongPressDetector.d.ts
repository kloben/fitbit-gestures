import { LongPress, LongPressConfig } from './LongPress';
import { GestureCallback } from '../interfaces/gesture-callback.interface';
export declare class LongPressDetector extends LongPress {
    private readonly element;
    constructor(element: string | Element, cb: GestureCallback, cfg?: LongPressConfig);
}
