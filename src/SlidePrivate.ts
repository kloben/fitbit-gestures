import {Slide, SlideCallback} from "./Slide";

export class SlidePrivate extends Slide {

  constructor(callback: SlideCallback) {
    super(callback);
  }

  onMouseDown(evt: MouseEvent) {
    super._onMouseDown(evt);
  }

  onMouseUp(evt: MouseEvent) {
    super._onMouseUp(evt);
  }

  onMouseMove(evt: MouseEvent) {
    super._onMouseMove(evt);
  }
}

