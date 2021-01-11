export interface DoubleTapConfig {
    interval: number;
}
export declare type DoubleTapCallback = () => any;
export declare class DoubleTap {
    private readonly tapCallback;
    private readonly interval;
    private lastTap;
    protected constructor(tapCallback: DoubleTapCallback, cfg?: DoubleTapConfig);
    protected _onMouseUp(): void;
}
