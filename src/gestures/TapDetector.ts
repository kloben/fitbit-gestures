import { FindElement } from '../helpers/dom.helper'
import { GestureCallback } from '../interfaces/gesture-callback.interface'
import { Tap } from './Tap'

export class TapDetector extends Tap {
  private readonly element: Element

  constructor (
    element: string | Element,
    cb: GestureCallback
  ) {
    super(cb)
    this.element = FindElement(element)
    this.element.onmouseup = this._onMouseUp.bind(this)
    this.element.onmousedown = this._onMouseDown.bind(this)
  }
}
