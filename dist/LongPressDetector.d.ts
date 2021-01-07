import { LongPress, LongPressCallback, LongPressConfig } from "./LongPress";
export declare class LongPressDetector extends LongPress {
    private readonly element;
    constructor(element: string | Element, longPressCallback: LongPressCallback, cfg?: LongPressConfig);
}
