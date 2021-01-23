import { DoubleTapPrivate } from '../src/gestures/DoubleTapPrivate'
import { TestUtil, wait } from './test.util'
import { GestureEvent } from '../src/interfaces/gesture-event.interface'
import { GestureType } from '../src/enums/gesture-type.enum'

describe('Double Tap Gesture', () => {

  test('Test simple double tap', () => {
    const cb = jest.fn()
    const gesture = new DoubleTapPrivate(cb)
    const event = TestUtil.getMouseEvent(10, 15)
    const response: GestureEvent = {
      type: GestureType.DoubleTap,
      point: {
        x: 10,
        y: 15
      }
    }

    gesture.onMouseUp(event)
    gesture.onMouseUp(event)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })

  test('Test slow double tap', async () => {
    const cb = jest.fn()
    const gesture = new DoubleTapPrivate(cb)
    const event = TestUtil.getMouseEvent(10, 15)

    gesture.onMouseUp(event)
    await wait(500)
    gesture.onMouseUp(event)

    expect(cb).toHaveBeenCalledTimes(0)
  })
})
