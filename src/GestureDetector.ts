import {SwipeCallback, SwipeConfig} from "./Swipe";
import {findElement} from "./helpers/find-element.helper";
import {SwipePrivate} from "./SwipePrivate";
import {DoubleTapPrivate} from "./DoubleTapPrivate";
import {DoubleTapCallback, DoubleTapConfig} from "./DoubleTap";
import {SlideCallback} from "./Slide";
import {SlidePrivate} from "./SlidePrivate";

export interface GestureConfig {

}

export class GestureDetector {
  private readonly element: Element;
  private swipe: SwipePrivate;
  private doubleTap: DoubleTapPrivate;
  private slide: SlidePrivate;
  private callbacks = {
    up: null,
    down: null,
    move: null
  }

  constructor(
    element: string | Element,
    cfg?: GestureConfig
  ) {
    this.element = findElement(element);
    return this;
  }

  onSwipe(cb: SwipeCallback, cfg?: SwipeConfig) {
    this.swipe = new SwipePrivate(cb, cfg)
    this._addListener('up', this.swipe.onMouseUp.bind(this.swipe));
    this._addListener('down', this.swipe.onMouseDown.bind(this.swipe));
    return this;
  }

  onDoubleTap(cb: DoubleTapCallback, cfg?: DoubleTapConfig) {
    this.doubleTap = new DoubleTapPrivate(cb, cfg)
    this._addListener('up', this.doubleTap.onMouseUp.bind(this.doubleTap));
    return this;
  }

  onSlide(cb: SlideCallback) {
    this.slide = new SlidePrivate(cb);
    this._addListener('up', this.slide.onMouseUp.bind(this.slide));
    this._addListener('down', this.slide.onMouseDown.bind(this.slide));
    this._addListener('move', this.slide.onMouseMove.bind(this.slide));
    return this;
  }

  private _addListener(gesture: string, cb: Function) {
    if (!this.callbacks[gesture]) {
      this.callbacks[gesture] = [];
      this.element[`onmouse${gesture}`] = (evt: MouseEvent) => {
        this.callbacks[gesture].forEach((fn: Function) => fn(evt));
      }
    }

    this.callbacks[gesture].push(cb);
  }

}
