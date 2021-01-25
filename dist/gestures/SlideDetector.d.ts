import { Slide } from './Slide';
import { GestureCallback } from '../interfaces/gesture-callback.interface';
export declare class SlideDetector extends Slide {
    private readonly element;
    constructor(element: string | Element, cb: GestureCallback);
}
