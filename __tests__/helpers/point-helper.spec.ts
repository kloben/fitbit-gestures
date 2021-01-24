import { GetDirection } from '../../src/helpers/point.helper'
import { GestureDirection } from '../../src/enums/gesture-direction.enum'

describe('Pointer Helper', () => {

  test('Test Up', () => {
    const pointA = { x: 100, y: 100 }
    const pointB = { x: 100, y: 50 }
    const threshold = 25

    const response = GetDirection(pointA, pointB, threshold)

    expect(response).toBe(GestureDirection.Up)
  })

  test('Test Down', () => {
    const pointA = { x: 100, y: 100 }
    const pointB = { x: 100, y: 150 }
    const threshold = 25

    const response = GetDirection(pointA, pointB, threshold)

    expect(response).toBe(GestureDirection.Down)
  })

  test('Test Left', () => {
    const pointA = { x: 100, y: 100 }
    const pointB = { x: 35, y: 100 }
    const threshold = 25

    const response = GetDirection(pointA, pointB, threshold)

    expect(response).toBe(GestureDirection.Left)
  })

  test('Test Right', () => {
    const pointA = { x: 100, y: 100 }
    const pointB = { x: 135, y: 100 }
    const threshold = 25

    const response = GetDirection(pointA, pointB, threshold)

    expect(response).toBe(GestureDirection.Right)
  })

  test('Test Up Right', () => {
    const pointA = { x: 100, y: 100 }
    const pointB = { x: 135, y: 50 }
    const threshold = 25

    const response = GetDirection(pointA, pointB, threshold)

    expect(response).toBe(GestureDirection.UpRight)
  })

  test('Test Up Left', () => {
    const pointA = { x: 100, y: 100 }
    const pointB = { x: 50, y: 20 }
    const threshold = 25

    const response = GetDirection(pointA, pointB, threshold)

    expect(response).toBe(GestureDirection.UpLeft)
  })

  test('Test Down Right', () => {
    const pointA = { x: 100, y: 100 }
    const pointB = { x: 135, y: 135 }
    const threshold = 25

    const response = GetDirection(pointA, pointB, threshold)

    expect(response).toBe(GestureDirection.DownRight)
  })

  test('Test Down Left', () => {
    const pointA = { x: 100, y: 100 }
    const pointB = { x: 20, y: 135 }
    const threshold = 25

    const response = GetDirection(pointA, pointB, threshold)

    expect(response).toBe(GestureDirection.DownLeft)
  })
})
