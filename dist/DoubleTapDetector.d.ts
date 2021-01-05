import { DoubleTap, DoubleTapCallback, DoubleTapConfig } from "./DoubleTap";
export declare class DoubleTapDetector extends DoubleTap {
    private readonly element;
    constructor(element: string | Element, tapCallback: DoubleTapCallback, cfg?: DoubleTapConfig);
}
