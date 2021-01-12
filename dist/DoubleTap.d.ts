import { GestureCallback } from './interfaces/gesture-callback.interface';
export interface DoubleTapConfig {
    interval: number;
}
export declare abstract class DoubleTap {
    private readonly cb;
    private readonly interval;
    private lastTap;
    constructor(cb: GestureCallback, cfg?: DoubleTapConfig);
    protected _onMouseUp(evt: MouseEvent): void;
}
