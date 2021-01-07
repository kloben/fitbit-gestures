import {LongPress, LongPressCallback, LongPressConfig} from "./LongPress";

export class LongPressPrivate extends LongPress {

  constructor(callback: LongPressCallback, cfg?: LongPressConfig) {
    super(callback, cfg);
  }

  onMouseDown() {
    super._onMouseDown();
  }

  onMouseUp() {
    super._onMouseUp();
  }
}
