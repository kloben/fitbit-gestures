import { SwipeConfig } from './Swipe'
import { findElement } from '../helpers/find-element.helper'
import { SwipePrivate } from './SwipePrivate'
import { DoubleTapPrivate } from './DoubleTapPrivate'
import { DoubleTapConfig } from './DoubleTap'
import { SlidePrivate } from './SlidePrivate'
import { LongPressPrivate } from './LongPressPrivate'
import { GestureCallback } from '../interfaces/gesture-callback.interface'
import { TapPrivate } from './TapPrivate'

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
    this.element = findElement(element)
    return this
  }

  onTap (cb: GestureCallback) {
    this.tap = new TapPrivate(cb)
    this._addListener('up', this.tap.onMouseUp.bind(this.tap))
    this._addListener('down', this.tap.onMouseDown.bind(this.tap))
  }

  onDoubleTap (cb: GestureCallback, cfg?: DoubleTapConfig) {
    this.doubleTap = new DoubleTapPrivate(cb, cfg)
    this._addListener('up', this.doubleTap.onMouseUp.bind(this.doubleTap))
    return this
  }

  onLongPress (cb: GestureCallback) {
    this.longPress = new LongPressPrivate(cb)
    this._addListener('up', this.longPress.onMouseUp.bind(this.longPress))
    this._addListener('down', this.longPress.onMouseDown.bind(this.longPress))
    this._addListener('move', this.longPress.onMouseMove.bind(this.longPress))
    return this
  }

  onSwipe (cb: GestureCallback, cfg?: SwipeConfig) {
    this.swipe = new SwipePrivate(cb, cfg)
    this._addListener('up', this.swipe.onMouseUp.bind(this.swipe))
    this._addListener('down', this.swipe.onMouseDown.bind(this.swipe))
    return this
  }

  onSlide (cb: GestureCallback) {
    this.slide = new SlidePrivate(cb)
    this._addListener('up', this.slide.onMouseUp.bind(this.slide))
    this._addListener('down', this.slide.onMouseDown.bind(this.slide))
    this._addListener('move', this.slide.onMouseMove.bind(this.slide))
    return this
  }

  private _addListener (gesture: 'up' | 'down' | 'move', cb: Function) {
    if (!this.callbacks[gesture]) {
      this.callbacks[gesture] = []
      this.element[`onmouse${gesture}`] = (evt: MouseEvent) => {
        this.callbacks[gesture].forEach((fn: Function) => fn(evt))
      }
    }

    this.callbacks[gesture].push(cb)
  }
}
