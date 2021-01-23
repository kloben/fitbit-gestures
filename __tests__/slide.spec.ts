import { getMouseEvent } from './test.util'
import { GestureType } from '../src/enums/gesture-type.enum'
import { GestureEvent } from '../src/interfaces/gesture-event.interface'
import { SlidePrivate } from '../src/gestures/SlidePrivate'

describe('Slide Gesture', () => {

  test('Test basic slide', () => {
    const cb = jest.fn()
    const gesture = new SlidePrivate(cb)
    const eventFrom = getMouseEvent(10, 15)
    const eventTo = getMouseEvent(10, 45)
    const responseA: GestureEvent = {
      type: GestureType.Slide,
      point: { x: 10, y: 45 },
      from: { x: 10, y: 15 },
      ended: false
    }
    const responseB: GestureEvent = {
      type: GestureType.Slide,
      point: { x: 10, y: 45 },
      from: { x: 10, y: 15 },
      ended: true
    }

    gesture.onMouseDown(eventFrom)
    expect(cb).toHaveBeenCalledTimes(0)
    gesture.onMouseMove(eventTo)
    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(responseA)
    gesture.onMouseUp(eventTo)
    expect(cb).toHaveBeenCalledTimes(2)
    expect(cb).toHaveBeenCalledWith(responseB)
  })
})
