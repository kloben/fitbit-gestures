import { getFakeElement, getMouseEvent } from '../test.util'
import { GestureType } from '../../src/enums/gesture-type.enum'
import { GestureEvent } from '../../src/interfaces/gesture-event.interface'
import { SwipePrivate } from '../../src/gestures/SwipePrivate'
import { GestureDirection } from '../../src/enums/gesture-direction.enum'
import { SwipeDetector } from '../../src/gestures/SwipeDetector'

describe('Swipe Gesture', () => {

  test('Public swipe detector', () => {
    const cb = jest.fn()
    const element = getFakeElement()
    const eventFrom = getMouseEvent(10, 15)
    const eventTo = getMouseEvent(10, 120)
    const response: GestureEvent = {
      type: GestureType.Swipe,
      point: { x: 10, y: 120 },
      from: { x: 10, y: 15 },
      dir: GestureDirection.Down
    }
    new SwipeDetector(element, cb)

    element.onmousedown(eventFrom)
    expect(cb).toHaveBeenCalledTimes(0)
    element.onmouseup(eventTo)
    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })

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

  test('Test short swipe', () => {
    const cb = jest.fn()
    const gesture = new SwipePrivate(cb)
    const eventFrom = getMouseEvent(10, 15)
    const eventTo = getMouseEvent(10, 50)

    gesture.onMouseDown(eventFrom)
    gesture.onMouseUp(eventTo)

    expect(cb).toHaveBeenCalledTimes(0)
  })

  test('Test short swipe override', () => {
    const cb = jest.fn()
    const gesture = new SwipePrivate(cb, {threshold: 10})
    const eventFrom = getMouseEvent(10, 15)
    const eventTo = getMouseEvent(10, 50)

    gesture.onMouseDown(eventFrom)
    gesture.onMouseUp(eventTo)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith({
      type: GestureType.Swipe,
      point: { x: 10, y: 50 },
      from: { x: 10, y: 15 },
      dir: GestureDirection.Down
    })
  })

  test('Test swipe without down', () => {
    const cb = jest.fn()
    const gesture = new SwipePrivate(cb)
    const eventFrom = getMouseEvent(10, 10)
    const eventTo = getMouseEvent(120, 15)

    gesture.onMouseMove(eventFrom)
    gesture.onMouseMove(eventTo)
    gesture.onMouseUp(eventTo)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith({
      type: GestureType.Swipe,
      point: { x: 120, y: 15 },
      from: { x: 10, y: 10 },
      dir: GestureDirection.Right
    })
  })

  test('Test only up', () => {
    const cb = jest.fn()
    const gesture = new SwipePrivate(cb)
    const eventTo = getMouseEvent(10, 120)

    gesture.onMouseUp(eventTo)
    expect(cb).toHaveBeenCalledTimes(0)
  })
})
