import { SwipeConfig } from './gestures/Swipe'
import { FindElement } from './helpers/dom.helper'
import { SwipePrivate } from './gestures/SwipePrivate'
import { DoubleTapPrivate } from './gestures/DoubleTapPrivate'
import { DoubleTapConfig } from './gestures/DoubleTap'
import { SlidePrivate } from './gestures/SlidePrivate'
import { LongPressPrivate } from './gestures/LongPressPrivate'
import { GestureCallback } from './interfaces/gesture-callback.interface'
import { TapPrivate } from './gestures/TapPrivate'
import { TapConfig } from './gestures/Tap'
import { LongPressConfig } from './gestures/LongPress'
import { SlideConfig } from './gestures/Slide'

export class GestureDetector {
  private readonly element: Element
  private swipe: SwipePrivate
  private doubleTap: DoubleTapPrivate
  private slide: SlidePrivate
  private longPress: LongPressPrivate
  private tap: TapPrivate
  private callbacks = {
    up: null,
    down: null,
    move: null
  }

  constructor (
    element: string | Element
  ) {
    this.element = FindElement(element)
    return this
  }

  onTap (cb: GestureCallback, cfg?: TapConfig) {
    this.tap = new TapPrivate(cb, cfg)
    this._addListener('up', this.tap.onMouseUp.bind(this.tap))
    this._addListener('down', this.tap.onMouseDown.bind(this.tap))
    return this
  }

  onDoubleTap (cb: GestureCallback, cfg?: DoubleTapConfig) {
    this.doubleTap = new DoubleTapPrivate(cb, cfg)
    this._addListener('up', this.doubleTap.onMouseUp.bind(this.doubleTap))
    return this
  }

  onLongPress (cb: GestureCallback, cfg?: LongPressConfig) {
    this.longPress = new LongPressPrivate(cb, cfg)
    this._addListener('up', this.longPress.onMouseUp.bind(this.longPress))
    this._addListener('down', this.longPress.onMouseDown.bind(this.longPress))
    this._addListener('move', this.longPress.onMouseMove.bind(this.longPress))
    return this
  }

  onSwipe (cb: GestureCallback, cfg?: SwipeConfig) {
    this.swipe = new SwipePrivate(cb, cfg)
    this._addListener('up', this.swipe.onMouseUp.bind(this.swipe))
    this._addListener('down', this.swipe.onMouseDown.bind(this.slide))
    this._addListener('down', this.swipe.onMouseDown.bind(this.swipe))
    return this
  }

  onSlide (cb: GestureCallback, cfg?: SlideConfig) {
    this.slide = new SlidePrivate(cb, cfg)
    this._addListener('up', this.slide.onMouseUp.bind(this.slide))
    this._addListener('down', this.slide.onMouseDown.bind(this.slide))
    this._addListener('move', this.slide.onMouseMove.bind(this.slide))
    return this
  }

  private _addListener (action: 'up' | 'down' | 'move', cb: Function) {
    if (!this.callbacks[action]) {
      this.callbacks[action] = []
      this.element[`onmouse${action}`] = (evt: MouseEvent) => {
        this.callbacks[action].forEach((fn: Function) => fn(evt))
      }
    }

    this.callbacks[action].push(cb)
  }
}
