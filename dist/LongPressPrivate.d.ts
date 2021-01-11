import { LongPress, LongPressCallback, LongPressConfig } from "./LongPress";
export declare class LongPressPrivate extends LongPress {
    constructor(callback: LongPressCallback, cfg?: LongPressConfig);
    onMouseDown(evt: MouseEvent): void;
    onMouseUp(): void;
    onMouseMove(evt: MouseEvent): void;
}
