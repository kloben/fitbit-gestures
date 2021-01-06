import { Slide, SlideCallback } from "./Slide";
export declare class SlideDetector extends Slide {
    private readonly element;
    constructor(element: string | Element, slideCallback: SlideCallback);
}
