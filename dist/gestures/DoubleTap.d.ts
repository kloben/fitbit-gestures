import { GestureCallback } from '../interfaces/gesture-callback.interface';
export interface DoubleTapConfig {
    interval?: number;
    threshold?: number;
}
export declare abstract class DoubleTap {
    private readonly cb;
    private readonly maxInterval;
    private readonly maxThreshold;
    private lastTime;
    private lastPoint;
    constructor(cb: GestureCallback, cfg?: DoubleTapConfig);
    protected _onMouseUp(evt: MouseEvent): void;
}
