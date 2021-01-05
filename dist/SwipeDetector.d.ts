import { Swipe, SwipeCallback, SwipeConfig } from "./Swipe";
export declare class SwipeDetector extends Swipe {
    private readonly element;
    constructor(element: string | Element, swipeCallback: SwipeCallback, cfg?: SwipeConfig);
}
