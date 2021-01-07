import { LongPress, LongPressCallback, LongPressConfig } from "./LongPress";
export declare class LongPressPrivate extends LongPress {
    constructor(callback: LongPressCallback, cfg?: LongPressConfig);
    onMouseDown(): void;
    onMouseUp(): void;
}
