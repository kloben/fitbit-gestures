import { findElement } from './helpers/find-element.helper'
import { Swipe, SwipeConfig } from './Swipe'
import { GestureCallback } from './interfaces/gesture-callback.interface'

export class SwipeDetector extends Swipe {
  private readonly element: Element

  constructor (
    element: string | Element,
    cb: GestureCallback,
    cfg?: SwipeConfig
  ) {
    super(cb, cfg)
    this.element = findElement(element)
    this.element.onmousedown = this._onMouseDown.bind(this)
    this.element.onmouseup = this._onMouseUp.bind(this)
  }
}
