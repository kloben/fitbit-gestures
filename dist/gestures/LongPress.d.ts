import { GestureCallback } from '../interfaces/gesture-callback.interface';
export interface LongPressConfig {
    time?: number;
    threshold?: number;
}
export declare abstract class LongPress {
    private readonly cb;
    private readonly minTime;
    private readonly threshold;
    private initialPoint;
    private timeout;
    private executed;
    constructor(cb: GestureCallback, cfg?: LongPressConfig);
    protected _onMouseDown(evt: MouseEvent): void;
    protected _onMouseMove(evt: MouseEvent): void;
    protected _onMouseUp(): void;
    private _init;
    private _reset;
    private _execute;
}
