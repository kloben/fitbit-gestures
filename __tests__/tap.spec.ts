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

  test('Test single slow tap override', async () => {
    const cb = jest.fn()
    const gesture = new TapPrivate(cb, { interval: 1000 })
    const event = TestUtil.getMouseEvent(10, 15)
    const response: GestureEvent = {
      type: GestureType.Tap,
      point: {
        x: 10,
        y: 15
      }
    }

    gesture.onMouseDown(event)
    await wait(300)
    gesture.onMouseUp(event)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })

  test('Test double tap', async () => {
    const cb = jest.fn()
    const gesture = new TapPrivate(cb)
    const event = TestUtil.getMouseEvent(10, 15)

    gesture.onMouseDown(event)
    gesture.onMouseUp(event)
    await wait(100)
    gesture.onMouseDown(event)
    gesture.onMouseUp(event)

    expect(cb).toHaveBeenCalledTimes(2)
  })

  test('Test minor movement allowed', () => {
    const cb = jest.fn()
    const gesture = new TapPrivate(cb)
    const startEvent = TestUtil.getMouseEvent(10, 15)
    const endEvent = TestUtil.getMouseEvent(5, 25)
    const response: GestureEvent = {
      type: GestureType.Tap,
      point: {
        x: 10,
        y: 15
      }
    }

    gesture.onMouseDown(startEvent)
    gesture.onMouseUp(endEvent)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })

  test('Test exceed threshold', async () => {
    const cb = jest.fn()
    const gesture = new TapPrivate(cb)
    const startEventA = TestUtil.getMouseEvent(10, 15)
    const endEventA = TestUtil.getMouseEvent(10, 100)
    const startEventB = TestUtil.getMouseEvent(10, 15)
    const endEventB = TestUtil.getMouseEvent(10, 26)

    gesture.onMouseDown(startEventA)
    gesture.onMouseUp(endEventA)
    await wait(10)
    gesture.onMouseDown(startEventB)
    gesture.onMouseUp(endEventB)

    expect(cb).toHaveBeenCalledTimes(0)
  })

  test('Test exceed threshold override', async () => {
    const cb = jest.fn()
    const gesture = new TapPrivate(cb, { threshold: 100 })
    const startEvent = TestUtil.getMouseEvent(10, 15)
    const endEvent = TestUtil.getMouseEvent(10, 100)
    const response: GestureEvent = {
      type: GestureType.Tap,
      point: {
        x: 10,
        y: 15
      }
    }

    gesture.onMouseDown(startEvent)
    gesture.onMouseUp(endEvent)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(response)
  })

  test('Test up without down', () => {
    const cb = jest.fn()
    const gesture = new TapPrivate(cb)
    const event = TestUtil.getMouseEvent(10, 15)

    gesture.onMouseUp(event)

    expect(cb).toHaveBeenCalledTimes(0)
  })
})
