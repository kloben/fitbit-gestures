export interface SwipeConfig {
    threshold: number;
}
export declare enum SWIPE_DIR {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3
}
export declare type SwipeCallback = (dir: SWIPE_DIR) => any;
export declare class Swipe {
    private readonly swipeCallback;
    private readonly threshold;
    private initY;
    private initX;
    protected constructor(swipeCallback: SwipeCallback, cfg?: SwipeConfig);
    protected _onMouseDown(evt: MouseEvent): void;
    protected _onMouseUp(evt: MouseEvent): void;
}
