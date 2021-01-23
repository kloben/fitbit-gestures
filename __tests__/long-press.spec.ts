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
    gesture.onMouseUp()

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })

  test('Short long press', async () => {
    const cb = jest.fn()
    const gesture = new LongPressPrivate(cb)
    const event = getMouseEvent(10, 15)

    gesture.onMouseDown(event)
    await wait(100)
    gesture.onMouseUp()

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
    gesture.onMouseUp()

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })


  test('Long press but moved', async () => {
    const cb = jest.fn()
    const gesture = new LongPressPrivate(cb)
    const eventA = getMouseEvent(10, 15)
    const eventB = getMouseEvent(10, 50)

    gesture.onMouseDown(eventA)
    gesture.onMouseMove(eventB)
    await wait(400)
    gesture.onMouseUp()

    expect(cb).toHaveBeenCalledTimes(0)
  })

  test('Long press but moved override', async () => {
    const cb = jest.fn()
    const gesture = new LongPressPrivate(cb, {threshold: 100})
    const eventA = getMouseEvent(10, 15)
    const eventB = getMouseEvent(10, 50)
    const response: GestureEvent = {
      type: GestureType.LongPress,
      point: {
        x: 10,
        y: 15
      }
    }

    gesture.onMouseDown(eventA)
    gesture.onMouseMove(eventB)
    await wait(400)
    gesture.onMouseUp()

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })

  test('Moved without down', async () => {
    const cb = jest.fn()
    const gesture = new LongPressPrivate(cb)
    const event = getMouseEvent(10, 15)

    gesture.onMouseMove(event)
    await wait(400)
    gesture.onMouseUp()

    expect(cb).toHaveBeenCalledTimes(0)
  })
})
