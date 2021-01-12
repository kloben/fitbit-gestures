import { LongPress } from './LongPress'

export class LongPressPrivate extends LongPress {
  onMouseDown (evt: MouseEvent) {
    super._onMouseDown(evt)
  }

  onMouseUp () {
    super._onMouseUp()
  }

  onMouseMove (evt: MouseEvent) {
    super._onMouseMove(evt)
  }
}
