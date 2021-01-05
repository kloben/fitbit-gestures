import { DoubleTapConfig } from "./DoubleTapDetector";
import { SWIPE_DIR, SwipeConfig } from "./Swipe";
export interface GestureConfig {
}
export declare class GestureDetector {
    private readonly element;
    private readonly upFunctions;
    private readonly downFunctions;
    private readonly moveFunctions;
    constructor(element: string | Element, cfg?: GestureConfig);
    private _initUp;
    onSwipe(swipeCallback: (dir: SWIPE_DIR) => any, swipeCfg?: SwipeConfig): this;
    onDoubleTap(doubleTapCallback: () => any, doubleTapCfg?: DoubleTapConfig): this;
}
