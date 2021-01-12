import { Tap } from './Tap'

export class TapPrivate extends Tap {
  onMouseDown (evt: MouseEvent) {
    super._onMouseDown(evt)
  }
}
