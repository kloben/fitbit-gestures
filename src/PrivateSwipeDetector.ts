import {Swipe} from "./Swipe";

export class PrivateSwipeDetector extends Swipe {

  onMouseDown(evt: MouseEvent) {
    super._onMouseDown(evt);
  }

  onMouseUp(evt: MouseEvent) {
    super._onMouseUp(evt);
  }
}

