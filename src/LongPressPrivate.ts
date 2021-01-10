import {LongPress, LongPressCallback, LongPressConfig} from "./LongPress";

export class LongPressPrivate extends LongPress {

  constructor(callback: LongPressCallback, cfg?: LongPressConfig) {
    super(callback, cfg);
  }

  onMouseDown(evt: MouseEvent) {
    super._onMouseDown(evt);
  }

  onMouseUp() {
    super._onMouseUp();
  }

  onMouseMove(evt: MouseEvent) {
    super._onMouseMove(evt);
  }
}
