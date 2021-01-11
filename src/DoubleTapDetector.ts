import { findElement } from './helpers/find-element.helper'
import { DoubleTap, DoubleTapCallback, DoubleTapConfig } from './DoubleTap'

export class DoubleTapDetector extends DoubleTap {
  private readonly element: Element

  constructor (
    element: string | Element,
    tapCallback: DoubleTapCallback,
    cfg?: DoubleTapConfig
  ) {
    super(tapCallback, cfg)
    this.element = findElement(element)
    this.element.onmouseup = this._onMouseUp.bind(this)
  }
}
