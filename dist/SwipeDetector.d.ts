import { Swipe, SWIPE_DIR, SwipeConfig } from "./Swipe";
export declare class SwipeDetector extends Swipe {
    private readonly element;
    constructor(element: string | Element, swipeCallback: (dir: SWIPE_DIR) => any, cfg?: SwipeConfig);
}
