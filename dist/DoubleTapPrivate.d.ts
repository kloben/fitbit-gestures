import { DoubleTap, DoubleTapCallback, DoubleTapConfig } from "./DoubleTap";
export declare class DoubleTapPrivate extends DoubleTap {
    constructor(callback: DoubleTapCallback, cfg?: DoubleTapConfig);
    onMouseUp(): void;
}
