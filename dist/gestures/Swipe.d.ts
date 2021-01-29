import { GestureCallback } from '../interfaces/gesture-callback.interface';
export interface SwipeConfig {
    threshold?: number;
}
export declare abstract class Swipe {
    private readonly cb;
    private readonly minThreshold;
    private startPoint;
    constructor(cb: GestureCallback, cfg?: SwipeConfig);
    protected _onMouseDown(evt: MouseEvent): void;
    protected _onMouseMove(evt: MouseEvent): void;
    protected _onMouseUp(evt: MouseEvent): void;
}
