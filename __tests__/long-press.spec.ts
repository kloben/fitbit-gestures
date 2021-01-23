import { getMouseEvent, wait } from './test.util'
import { GestureEvent } from '../src/interfaces/gesture-event.interface'
import { GestureType } from '../src/enums/gesture-type.enum'
import { LongPressPrivate } from '../src/gestures/LongPressPrivate'

describe('Long Press Gesture', () => {

  test('Simple long press', async () => {
    const cb = jest.fn()
    const gesture = new LongPressPrivate(cb)
    const event = getMouseEvent(10, 15)
    const response: GestureEvent = {
      type: GestureType.LongPress,
      point: {
        x: 10,
        y: 15
      }
    }

    gesture.onMouseDown(event)
    await wait(400)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })

  test('Short long press', async () => {
    const cb = jest.fn()
    const gesture = new LongPressPrivate(cb)
    const event = getMouseEvent(10, 15)

    gesture.onMouseDown(event)
    await wait(100)

    expect(cb).toHaveBeenCalledTimes(0)
  })

  test('Short long press override', async () => {
    const cb = jest.fn()
    const gesture = new LongPressPrivate(cb, {time: 50})
    const event = getMouseEvent(10, 15)
    const response: GestureEvent = {
      type: GestureType.LongPress,
      point: {
        x: 10,
        y: 15
      }
    }

    gesture.onMouseDown(event)
    await wait(100)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })
})
