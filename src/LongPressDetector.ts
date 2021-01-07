import {LongPress, LongPressCallback, LongPressConfig} from "./LongPress";
import {findElement} from "./helpers/find-element.helper";

export class LongPressDetector extends LongPress {
  private readonly element: Element;

  constructor(
    element: string | Element,
    longPressCallback: LongPressCallback,
    cfg?: LongPressConfig
  ) {
    super(longPressCallback, cfg);
    this.element = findElement(element);
    this.element.onmousedown = this._onMouseDown.bind(this);
    this.element.onmouseup = this._onMouseUp.bind(this);
    return this;
  }
}
