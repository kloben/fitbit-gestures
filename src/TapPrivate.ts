import { Tap } from './Tap'

export class TapPrivate extends Tap {
  onMouseUp (evt: MouseEvent) {
    super._onMouseUp(evt)
  }
}
