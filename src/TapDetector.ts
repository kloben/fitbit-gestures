import {findElement} from "./helpers/find-element.helper";

export interface TapConfig {
  threshold: number
}

export class TapDetector {
  private readonly element: Element;
  private readonly threshold: number;
  private lastTap: number | null = null;

  constructor(
    element: string | Element,
    private readonly tapCallback: () => any,
    cfg?: TapConfig
  ) {
    this.element = findElement(element);
    this.threshold = cfg?.threshold || 250;
    this.element.onmouseup = this._onMouseUp.bind(this);
  }

  private _onMouseUp(evt: MouseEvent) {
    const now = Date.now();
    if (now && now - this.lastTap < 250) {
      this.tapCallback();
    }
    this.lastTap = now;
  }
}

