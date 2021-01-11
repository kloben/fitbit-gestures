import { findElement } from './helpers/find-element.helper'
import { Swipe, SwipeCallback, SwipeConfig } from './Swipe'

export class SwipeDetector extends Swipe {
  private readonly element: Element

  constructor (
    element: string | Element,
    swipeCallback: SwipeCallback,
    cfg?: SwipeConfig
  ) {
    super(swipeCallback, cfg)
    this.element = findElement(element)
    this.element.onmousedown = this._onMouseDown.bind(this)
    this.element.onmouseup = this._onMouseUp.bind(this)
  }
}
