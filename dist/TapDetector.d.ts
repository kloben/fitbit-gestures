export interface TapConfig {
    threshold: number;
}
export declare class TapDetector {
    private readonly tapCallback;
    private readonly element;
    private readonly threshold;
    private lastTap;
    constructor(element: string | Element, tapCallback: () => any, cfg?: TapConfig);
    private _onMouseUp;
}
