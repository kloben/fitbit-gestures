export interface LongPressConfig {
    time: number;
}
export declare type LongPressCallback = () => any;
export declare class LongPress {
    private readonly longPressCallback;
    private readonly minTime;
    private timeout;
    protected constructor(longPressCallback: LongPressCallback, cfg?: LongPressConfig);
    protected _onMouseDown(): void;
    protected _onMouseUp(): void;
}
