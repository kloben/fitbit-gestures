export interface LongPressConfig {
  time: number
}

export type LongPressCallback = () => any;


export class LongPress {
  private readonly minTime: number;
  private timeout: number = null;

  protected constructor(
    private readonly longPressCallback: LongPressCallback,
    cfg?: LongPressConfig
  ) {
    this.minTime = cfg?.time || 1500;
  }

  protected _onMouseDown() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(this.longPressCallback, this.minTime);
  }

  protected _onMouseUp() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
}

