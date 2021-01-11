export enum SLIDE_EVENT {
  STARTED = 'STARTED',
  MOVED = 'MOVED',
  ENDED = 'ENDED'
}

export interface MovementData {
  from: number,
  to: number
}

export interface SlideData {
  type: SLIDE_EVENT,
  x: MovementData,
  y: MovementData
}

export type SlideCallback = (data: SlideData) => any;

export class Slide {
  private startX: number = null
  private lastX: number = null
  private startY: number = null
  private lastY: number = null

  protected constructor(
    private readonly slideCallback: SlideCallback
  ) {
  }

  protected _onMouseDown (evt: MouseEvent) {
    this.startX = evt.screenX
    this.startY = evt.screenY
    this.lastX = evt.screenX
    this.lastY = evt.screenY
    return this._generateEvent(SLIDE_EVENT.STARTED, evt)
  }

  protected _onMouseUp (evt: MouseEvent) {
    const data = this._generateEvent(SLIDE_EVENT.ENDED, evt)
    this.startX = null
    this.startY = null
    this.lastX = null
    this.lastY = null
    return data
  }

  protected _onMouseMove (evt: MouseEvent) {
    if (this.lastX === evt.screenX && this.lastY === evt.screenY) {
      return
    }
    this.lastX = evt.screenX
    this.lastY = evt.screenY
    return this._generateEvent(SLIDE_EVENT.MOVED, evt)
  }

  private _generateEvent (type: SLIDE_EVENT, evt: MouseEvent) {
    if (this.startX === null) {
      return
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
    })
  }
}
