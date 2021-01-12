import { GestureCallback } from './interfaces/gesture-callback.interface';
export declare abstract class Tap {
    private readonly cb;
    constructor(cb: GestureCallback);
    protected _onMouseUp(evt: MouseEvent): void;
}
