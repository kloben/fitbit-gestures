import { GestureCallback } from './interfaces/gesture-callback.interface';
export declare abstract class Slide {
    private readonly cb;
    private startX;
    private lastX;
    private startY;
    private lastY;
    constructor(cb: GestureCallback);
    protected _onMouseDown(evt: MouseEvent): void;
    protected _onMouseUp(evt: MouseEvent): void;
    protected _onMouseMove(evt: MouseEvent): void;
    private _generateEvent;
}
