import {Point} from "./interfaces/point.interface";

export interface LongPressConfig {
  time?: number,
  threshold?: number
}

export type LongPressCallback = () => any;


export class LongPress {
  private readonly minTime: number;
  private readonly threshold: number;
  private startPos: Point | null;
  private executed: boolean = false;
  private timeout: number = null;

  protected constructor(
    private readonly longPressCallback: LongPressCallback,
    cfg?: LongPressConfig
  ) {
    this.minTime = cfg?.time || 300;
    this.threshold = cfg?.time || 10;
  }

  protected _onMouseDown(evt: MouseEvent) {
    console.log('DOWN');
    this._init(evt);
  }

  protected _onMouseMove(evt: MouseEvent) {
    console.log('MOVE');
    if(this.executed) {
      console.log('MOVE skip');
      return;
    }
    if(
      Math.abs(evt.screenX - this.startPos.x) > this.threshold ||
      Math.abs(evt.screenY - this.startPos.y) > this.threshold
    ) {
      console.log('MOVE reset');
      this._init(evt);
    }
  }

  protected _onMouseUp() {
    console.log('UP');
    this._reset();
  }

  private _init(evt: MouseEvent) {
    this._reset();
    this.timeout = setTimeout(this._execute.bind(this), this.minTime);
    this.startPos = {x: evt.screenX, y: evt.screenY};
  }

  private _reset() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.startPos = null;
    this.executed = false;
  }

  private _execute() {
    console.log('EXECUTE');
    this.executed = true;
    this.longPressCallback();
  }
}

