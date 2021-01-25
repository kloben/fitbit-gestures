import { GestureCallback } from '../interfaces/gesture-callback.interface';
import { Tap } from './Tap';
export declare class TapDetector extends Tap {
    private readonly element;
    constructor(element: string | Element, cb: GestureCallback);
}
