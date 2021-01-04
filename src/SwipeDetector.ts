import {findElement} from "./helpers/find-element.helper";

export interface SwipeConfig {
  threshold: number
}

export enum SWIPE_DIR {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

export class SwipeDetector {
  private readonly element: Element;
  private readonly threshold: number;
  private initY: number = 0;
  private initX: number = 0;

  constructor(
    element: string | Element,
    private readonly swipeCallback: (dir: SWIPE_DIR) => any,
    cfg?: SwipeConfig
  ) {
    this.element = findElement(element);
    this.threshold = cfg?.threshold || 100;
    this.element.onmousedown = this._onMouseDown.bind(this);
    this.element.onmouseup = this._onMouseUp.bind(this);
  }

  private _onMouseDown(evt: MouseEvent) {
    this.initY = evt.screenY;
    this.initX = evt.screenX;
  }

  private _onMouseUp(evt: MouseEvent) {
    let x = evt.screenX - this.initX;
    let y = evt.screenY - this.initY;

    if (y < -this.threshold) {
      this.swipeCallback(SWIPE_DIR.UP);
    } else if (y > this.threshold) {
      this.swipeCallback(SWIPE_DIR.DOWN);
    } else if (x < -this.threshold) {
      this.swipeCallback(SWIPE_DIR.LEFT);
    } else if (x > this.threshold) {
      this.swipeCallback(SWIPE_DIR.RIGHT);
    }
  }
}

