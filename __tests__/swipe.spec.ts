import { getMouseEvent } from './test.util'
import { GestureType } from '../src/enums/gesture-type.enum'
import { GestureEvent } from '../src/interfaces/gesture-event.interface'
import { SwipePrivate } from '../src/gestures/SwipePrivate'
import { GestureDirection } from '../src/enums/gesture-direction.enum'

describe('Swipe Gesture', () => {

  test('Test basic swipe', () => {
    const cb = jest.fn()
    const gesture = new SwipePrivate(cb)
    const eventFrom = getMouseEvent(10, 15)
    const eventTo = getMouseEvent(10, 120)
    const response: GestureEvent = {
      type: GestureType.Swipe,
      point: { x: 10, y: 120 },
      from: { x: 10, y: 15 },
      dir: GestureDirection.Down
    }

    gesture.onMouseDown(eventFrom)
    expect(cb).toHaveBeenCalledTimes(0)
    gesture.onMouseUp(eventTo)
    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })
})
