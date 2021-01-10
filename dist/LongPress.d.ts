export interface LongPressConfig {
    time?: number;
    threshold?: number;
}
export declare type LongPressCallback = () => any;
export declare class LongPress {
    private readonly longPressCallback;
    private readonly minTime;
    private readonly threshold;
    private startPos;
    private executed;
    private timeout;
    protected constructor(longPressCallback: LongPressCallback, cfg?: LongPressConfig);
    protected _onMouseDown(evt: MouseEvent): void;
    protected _onMouseMove(evt: MouseEvent): void;
    protected _onMouseUp(): void;
    private _init;
    private _reset;
    private _execute;
}
