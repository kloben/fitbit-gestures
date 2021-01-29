import { GestureCallback } from '../interfaces/gesture-callback.interface';
export interface SlideConfig {
    threshold?: number;
}
export declare abstract class Slide {
    private readonly cb;
    private readonly minThreshold;
    private startPoint;
    private lastPoint;
    constructor(cb: GestureCallback, cfg?: SlideConfig);
    protected _onMouseDown(evt: MouseEvent): void;
    protected _onMouseMove(evt: MouseEvent): void;
    protected _onMouseUp(evt: MouseEvent): void;
    private _generateEvent;
}
