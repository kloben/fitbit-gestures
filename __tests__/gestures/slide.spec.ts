import { getFakeElement, getMouseEvent } from '../test.util'
import { GestureType } from '../../src/enums/gesture-type.enum'
import { GestureEvent } from '../../src/interfaces/gesture-event.interface'
import { SlidePrivate } from '../../src/gestures/SlidePrivate'
import { SlideDetector } from '../../src/gestures/SlideDetector'

describe('Slide Gesture', () => {

  test('Public slide detector', () => {
    const cb = jest.fn()
    const eventFrom = getMouseEvent(10, 15)
    const eventTo = getMouseEvent(10, 45)
    const element = getFakeElement()
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
    new SlideDetector(element, cb)

    element.onmousedown(eventFrom)
    expect(cb).toHaveBeenCalledTimes(0)
    element.onmousemove(eventTo)
    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(responseA)
    element.onmouseup(eventTo)
    expect(cb).toHaveBeenCalledTimes(2)
    expect(cb).toHaveBeenCalledWith(responseB)
  })

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

  test('Test less than threshold', () => {
    const cb = jest.fn()
    const gesture = new SlidePrivate(cb)
    const eventFrom = getMouseEvent(10, 15)
    const eventTo = getMouseEvent(10, 19)

    gesture.onMouseDown(eventFrom)
    gesture.onMouseMove(eventTo)
    gesture.onMouseUp(eventTo)

    expect(cb).toHaveBeenCalledTimes(0)
  })

  test('Test less than threshold override', () => {
    const cb = jest.fn()
    const gesture = new SlidePrivate(cb, {threshold: 1})
    const eventFrom = getMouseEvent(10, 15)
    const eventTo = getMouseEvent(10, 19)

    gesture.onMouseDown(eventFrom)
    gesture.onMouseMove(eventTo)
    gesture.onMouseUp(eventTo)

    expect(cb).toHaveBeenCalledTimes(2)
    expect(cb).toHaveBeenCalledWith({
      type: GestureType.Slide,
      point: { x: 10, y: 19 },
      from: { x: 10, y: 15 },
      ended: false
    })
    expect(cb).toHaveBeenCalledWith({
      type: GestureType.Slide,
      point: { x: 10, y: 19 },
      from: { x: 10, y: 15 },
      ended: true
    })
  })

  test('Test slide without down', () => {
    const cb = jest.fn()
    const gesture = new SlidePrivate(cb)
    const eventFrom = getMouseEvent(10, 15)
    const eventTo = getMouseEvent(10, 45)

    gesture.onMouseMove(eventFrom)
    gesture.onMouseMove(eventTo)
    gesture.onMouseUp(eventTo)

    expect(cb).toHaveBeenCalledTimes(0)
  })
})
