import { SWIPE_DIR, SwipeConfig } from "./SwipeDetector";
import { DoubleTapConfig } from "./DoubleTapDetector";
export interface GestureConfig {
}
export declare class GestureDetector {
    private readonly element;
    constructor(element: string | Element);
    onSwipe(swipeCallback: (dir: SWIPE_DIR) => any, swipeCfg?: SwipeConfig): this;
    onDoubleTap(doubleTapCallback: () => any, doubleTapCfg?: DoubleTapConfig): this;
}
