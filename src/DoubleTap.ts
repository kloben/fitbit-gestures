export interface DoubleTapConfig {
  threshold: number
}

export class DoubleTap {
  private readonly threshold: number;
  private lastTap: number | null = null;

  constructor(
    private readonly tapCallback: () => any,
    cfg?: DoubleTapConfig
  ) {
    this.threshold = cfg?.threshold || 250;
  }

  protected _onMouseUp(evt: MouseEvent) {
    const now = Date.now();
    if (now && now - this.lastTap < 250) {
      this.tapCallback();
    }
    this.lastTap = now;
  }
}

