import { DoubleTap, DoubleTapCallback, DoubleTapConfig } from './DoubleTap'

export class DoubleTapPrivate extends DoubleTap {
  constructor (callback: DoubleTapCallback, cfg?: DoubleTapConfig) {
    super(callback, cfg)
  }

  onMouseUp () {
    super._onMouseUp()
  }
}
