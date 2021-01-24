import { DoubleTapPrivate } from '../../src/gestures/DoubleTapPrivate'
import { getMouseEvent, wait } from '../test.util'
import { GestureEvent } from '../../src/interfaces/gesture-event.interface'
import { GestureType } from '../../src/enums/gesture-type.enum'
import { TapPrivate } from '../../src/gestures/TapPrivate'

describe('Double Tap Gesture', () => {

  test('Test simple double tap', () => {
    const cb = jest.fn()
    const gesture = new DoubleTapPrivate(cb)
    const event = getMouseEvent(10, 15)
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
    const event = getMouseEvent(10, 15)

    gesture.onMouseUp(event)
    await wait(500)
    gesture.onMouseUp(event)

    expect(cb).toHaveBeenCalledTimes(0)
  })

  test('Test slow double tap override', async () => {
    const cb = jest.fn()
    const gesture = new DoubleTapPrivate(cb, {interval: 1000})
    const event = getMouseEvent(10, 15)
    const response: GestureEvent = {
      type: GestureType.DoubleTap,
      point: {
        x: 10,
        y: 15
      }
    }

    gesture.onMouseUp(event)
    await wait(500)
    gesture.onMouseUp(event)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })

  test('Test minor movement double tap', () => {
    const cb = jest.fn()
    const gesture = new DoubleTapPrivate(cb)
    const eventA = getMouseEvent(10, 15)
    const eventB = getMouseEvent(15, 23)
    const response: GestureEvent = {
      type: GestureType.DoubleTap,
      point: {
        x: 10,
        y: 15
      }
    }

    gesture.onMouseUp(eventA)
    gesture.onMouseUp(eventB)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })

  test('Test exceed threshold', () => {
    const cb = jest.fn()
    const gesture = new DoubleTapPrivate(cb)
    const eventA = getMouseEvent(10, 15)
    const eventB = getMouseEvent(15, 123)

    gesture.onMouseUp(eventA)
    gesture.onMouseUp(eventB)

    expect(cb).toHaveBeenCalledTimes(0)
  })


  test('Test exceed threshold override', () => {
    const cb = jest.fn()
    const gesture = new DoubleTapPrivate(cb, {threshold: 500})
    const eventA = getMouseEvent(10, 15)
    const eventB = getMouseEvent(15, 123)
    const response: GestureEvent = {
      type: GestureType.DoubleTap,
      point: {
        x: 10,
        y: 15
      }
    }

    gesture.onMouseUp(eventA)
    gesture.onMouseUp(eventB)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })

  test('Test only up', () => {
    const cb = jest.fn()
    const gesture = new TapPrivate(cb)
    const event = getMouseEvent(10, 15)

    gesture.onMouseUp(event)
    gesture.onMouseUp(event)

    expect(cb).toHaveBeenCalledTimes(0)
  })
})
