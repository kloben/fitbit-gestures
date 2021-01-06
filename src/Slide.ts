export interface SlideConfig {
  distance: number
}

export enum SLIDE_EVENT {
  STARTED = 'STARTED',
  MOVED = 'MOVED',
  ENDED = 'ENDED'
}

export interface SlideData {
  type: SLIDE_EVENT,
  x: MovementData,
  y: MovementData
}

export interface MovementData {
  from: number,
  to: number
}

export type SlideCallback = (data: SlideData) => any;

export class Slide {
  private readonly minDistance: number;
  private startX: number;
  private startY: number;

  constructor(
    private readonly slideCallback: SlideCallback,
    cfg?: SlideConfig
  ) {
    this.minDistance = cfg?.distance || 50;
  }

  protected _onMouseDown(evt: MouseEvent) {
    this.startX = evt.screenX;
    this.startY = evt.screenY;
    return this._generateEvent(SLIDE_EVENT.STARTED, evt);
  }

  protected _onMouseUp(evt: MouseEvent) {
    const data = this._generateEvent(SLIDE_EVENT.ENDED, evt);
    this.startX = 0;
    this.startY = 0;
    return data;
  }

  protected _onMouseMove(evt: MouseEvent) {
    return this._generateEvent(SLIDE_EVENT.MOVED, evt);
  }

  private _generateEvent(type: SLIDE_EVENT, evt: MouseEvent) {
    if (!this.startX || this.startX - evt.screenX < this.minDistance) {
      return;
    }

    this.slideCallback({
      type,
      x: {
        from: this.startX,
        to: evt.screenX
      },
      y: {
        from: this.startY,
        to: evt.screenY
      }
    });
  }
}

