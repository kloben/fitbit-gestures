export interface DoubleTapConfig {
  interval: number
}

export type DoubleTapCallback = () => any;

export class DoubleTap {
  private readonly interval: number;
  private lastTap: number | null = null;

  constructor(
    private readonly tapCallback: DoubleTapCallback,
    cfg?: DoubleTapConfig
  ) {
    this.interval = cfg?.interval || 250;
  }

  protected _onMouseUp() {
    const now = Date.now();
    if (now && now - this.lastTap < 250) {
      this.tapCallback();
    }
    this.lastTap = now;
  }
}

