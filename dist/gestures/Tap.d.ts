import { GestureCallback } from '../interfaces/gesture-callback.interface';
export interface TapConfig {
    interval?: number;
    threshold?: number;
}
export declare abstract class Tap {
    private readonly cb;
    private readonly maxInterval;
    private readonly maxThreshold;
    private initialPoint;
    private initialTime;
    constructor(cb: GestureCallback, cfg?: TapConfig);
    protected _onMouseDown(evt: MouseEvent): void;
    protected _onMouseUp(evt: MouseEvent): void;
}
