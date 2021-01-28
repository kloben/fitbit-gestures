import { FindElement } from '../helpers/dom.helper'
import { Swipe, SwipeConfig } from './Swipe'
import { GestureCallback } from '../interfaces/gesture-callback.interface'

export class SwipeDetector extends Swipe {
  private readonly element: Element

  constructor (
    element: string | Element,
    cb: GestureCallback,
    cfg?: SwipeConfig
  ) {
    super(cb, cfg)
    this.element = FindElement(element)
    this.element.onmousedown = this._onMouseDown.bind(this)
    this.element.onmousemove = this._onMouseMove.bind(this)
    this.element.onmouseup = this._onMouseUp.bind(this)
  }
}
