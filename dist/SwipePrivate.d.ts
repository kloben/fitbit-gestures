import { Swipe, SwipeCallback, SwipeConfig } from "./Swipe";
export declare class SwipePrivate extends Swipe {
    constructor(callback: SwipeCallback, cfg?: SwipeConfig);
    onMouseDown(evt: MouseEvent): void;
    onMouseUp(evt: MouseEvent): void;
}
