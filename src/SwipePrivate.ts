import {Swipe, SwipeCallback, SwipeConfig} from "./Swipe";

export class SwipePrivate extends Swipe {

  constructor(callback: SwipeCallback, cfg?: SwipeConfig) {
    super(callback, cfg);
  }

  onMouseDown(evt: MouseEvent) {
    super._onMouseDown(evt);
  }

  onMouseUp(evt: MouseEvent) {
    super._onMouseUp(evt);
  }
}

