export interface SwipeConfig {
    threshold: number;
}
export declare enum SWIPE_DIR {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3
}
export declare class SwipeDetector {
    private readonly element;
    private readonly swipeCallback;
    private readonly threshold;
    private initY;
    private initX;
    constructor(element: string | Element, swipeCallback: (dir: SWIPE_DIR) => any, cfg?: SwipeConfig);
    private _onMouseDown;
    private _onMouseUp;
}
