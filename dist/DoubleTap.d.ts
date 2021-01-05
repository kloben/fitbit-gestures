export interface DoubleTapConfig {
    threshold: number;
}
export declare type DoubleTapCallback = () => any;
export declare class DoubleTap {
    private readonly tapCallback;
    private readonly threshold;
    private lastTap;
    constructor(tapCallback: DoubleTapCallback, cfg?: DoubleTapConfig);
    protected _onMouseUp(evt: MouseEvent): void;
}
