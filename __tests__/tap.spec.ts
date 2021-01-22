import { TapPrivate } from '../src/gestures/TapPrivate'
import { TestUtil, wait } from './test.util'
import { GestureType } from '../src/enums/gesture-type.enum'
import { GestureEvent } from '../src/interfaces/gesture-event.interface'

describe('Tap Gesture', () => {

  test('Test single fast tap', () => {
    const cb = jest.fn()
    const gesture = new TapPrivate(cb)
    const event = TestUtil.getMouseEvent(10, 15)
    const response: GestureEvent = {
      type: GestureType.Tap,
      point: {
        x: 10,
        y: 15
      }
    }
    gesture.onMouseDown(event)
    gesture.onMouseUp(event)
    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })

  test('Test single slow tap', async () => {
    const cb = jest.fn()
    const gesture = new TapPrivate(cb)
    const event = TestUtil.getMouseEvent(10, 15)
    gesture.onMouseDown(event)
    await wait(300)
    gesture.onMouseUp(event)
    expect(cb).toHaveBeenCalledTimes(0)
  })

  /*
  test('Test double tap', () => {
    const cb = jest.fn();
    const gesture = new TapPrivate(cb);
    const event = TestUtil.getMouseEvent(10, 15);
    gesture.onMouseDown(event);
    gesture.onMouseDown(event);
    expect(cb).toHaveBeenCalledTimes(2);
  })
   */
})
