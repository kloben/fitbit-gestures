import { GestureCallback } from './interfaces/gesture-callback.interface';
export interface SwipeConfig {
    threshold: number;
}
export declare abstract class Swipe {
    private readonly cb;
    private readonly threshold;
    private initY;
    private initX;
    constructor(cb: GestureCallback, cfg?: SwipeConfig);
    protected _onMouseDown(evt: MouseEvent): void;
    protected _onMouseUp(evt: MouseEvent): void;
    private getDirection;
}
