import { Swipe } from './Swipe'

export class SwipePrivate extends Swipe {
  onMouseDown (evt: MouseEvent) {
    super._onMouseDown(evt)
  }

  onMouseMove (evt: MouseEvent) {
    super._onMouseMove(evt)
  }

  onMouseUp (evt: MouseEvent) {
    super._onMouseUp(evt)
  }
}
