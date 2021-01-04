export interface DoubleTapConfig {
    threshold: number;
}
export declare class DoubleTapDetector {
    private readonly tapCallback;
    private readonly element;
    private readonly threshold;
    private lastTap;
    constructor(element: string | Element, tapCallback: () => any, cfg?: DoubleTapConfig);
    private _onMouseUp;
}
