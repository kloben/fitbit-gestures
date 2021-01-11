import { findElement } from './helpers/find-element.helper'
import { Slide } from './Slide'
import { GestureCallback } from './interfaces/gesture-callback.interface'

export class SlideDetector extends Slide {
  private readonly element: Element

  constructor (
    element: string | Element,
    cb: GestureCallback
  ) {
    super(cb)
    this.element = findElement(element)
    this.element.onmousedown = this._onMouseDown.bind(this)
    this.element.onmouseup = this._onMouseUp.bind(this)
    this.element.onmousemove = this._onMouseMove.bind(this)
  }
}
