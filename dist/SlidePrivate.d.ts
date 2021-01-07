import { Slide, SlideCallback } from "./Slide";
export declare class SlidePrivate extends Slide {
    constructor(callback: SlideCallback);
    onMouseDown(evt: MouseEvent): void;
    onMouseUp(evt: MouseEvent): void;
    onMouseMove(evt: MouseEvent): void;
}
