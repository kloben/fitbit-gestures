export interface SwipeConfig {
  threshold: number
}

export enum SWIPE_DIR {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

export type SwipeCallback = (dir: SWIPE_DIR) => any;

export class Swipe {
  private readonly threshold: number;
  private initY: number = 0;
  private initX: number = 0;

  protected constructor(
    private readonly swipeCallback: SwipeCallback,
    cfg?: SwipeConfig
  ) {
    this.threshold = cfg?.threshold || 100;
  }

  protected _onMouseDown(evt: MouseEvent) {
    this.initY = evt.screenY;
    this.initX = evt.screenX;
  }

  protected _onMouseUp(evt: MouseEvent) {
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

