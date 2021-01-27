import { getFakeElement, getMouseEvent, wait } from './test.util'
import { GestureDetector } from '../src/GestureDetector'
import { GestureEvent } from '../src/interfaces/gesture-event.interface'
import { GestureType } from '../src/enums/gesture-type.enum'
import { GestureDirection } from '../src/enums/gesture-direction.enum'

function setup() {
  const element = getFakeElement()
  const cb = jest.fn()

  // @ts-ignore
  const detector = new GestureDetector(<Element><unknown>element)
    .onTap(cb)
    .onDoubleTap(cb)
    .onLongPress(cb)
    .onSlide(cb)
    .onSwipe(cb)
  return { element, cb, detector }
}

describe('Gesture detector', () => {

  test('Test gesture detector generation', () => {
    const {cb, detector} = setup()

    expect(detector).not.toBe(null)
    expect(cb).toHaveBeenCalledTimes(0)
  })

  test('Test single tap', () => {
    const {element, cb} = setup()
    const event = getMouseEvent(100, 100)

    element.onmousedown(event)
    element.onmouseup(event)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(<GestureEvent>{
      type: GestureType.Tap,
      point: {x: 100, y: 100}
    })
  })

  test('Test double tap', async () => {
    const {element, cb} = setup()
    const eventA = getMouseEvent(100, 100)
    const eventB = getMouseEvent(90, 90)

    element.onmousedown(eventA)
    element.onmouseup(eventA)
    await wait(50)
    element.onmousedown(eventB)
    element.onmouseup(eventB)

    expect(cb).toHaveBeenCalledTimes(3)
    expect(cb).toHaveBeenCalledWith(<GestureEvent>{
      type: GestureType.Tap,
      point: {x: 100, y: 100}
    })
    expect(cb).toHaveBeenCalledWith(<GestureEvent>{
      type: GestureType.Tap,
      point: {x: 90, y: 90}
    })
    expect(cb).toHaveBeenCalledWith(<GestureEvent>{
      type: GestureType.DoubleTap,
      point: {x: 90, y: 90}
    })
  })


  test('Test long press', async () => {
    const {element, cb} = setup()
    const event = getMouseEvent(50, 50)

    element.onmousedown(event)
    await wait(350)
    element.onmouseup(event)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(<GestureEvent>{
      type: GestureType.LongPress,
      point: {x: 50, y: 50}
    })
  })

  test('Test slide', () => {
    const {element, cb} = setup()
    const eventFrom = getMouseEvent(50, 50)
    const eventMiddle = getMouseEvent(65, 65)
    const eventTo = getMouseEvent(80, 80)

    element.onmousedown(eventFrom)
    element.onmousemove(eventMiddle)
    element.onmousemove(eventTo)
    element.onmouseup(eventTo)

    expect(cb).toHaveBeenCalledTimes(3)
    expect(cb).toHaveBeenCalledWith(<GestureEvent>{
      type: GestureType.Slide,
      point: {x: 65, y: 65},
      from:  {x: 50, y: 50},
      ended: false
    })
    expect(cb).toHaveBeenCalledWith(<GestureEvent>{
      type: GestureType.Slide,
      point: {x: 80, y: 80},
      from:  {x: 50, y: 50},
      ended: false
    })
    expect(cb).toHaveBeenCalledWith(<GestureEvent>{
      type: GestureType.Slide,
      point: {x: 80, y: 80},
      from:  {x: 50, y: 50},
      ended: true
    })
  })


  test('Test swipe', async () => {
    const {element, cb} = setup()
    const eventFrom = getMouseEvent(50, 50)
    const eventTo = getMouseEvent(250, 50)

    element.onmousedown(eventFrom)
    element.onmouseup(eventTo)

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(<GestureEvent>{
      type: GestureType.Swipe,
      point: {x: 250, y: 50},
      from: {x: 50, y: 50},
      dir: GestureDirection.Right
    })
  })

})
