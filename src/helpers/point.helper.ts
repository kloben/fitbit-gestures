import { Point } from '../interfaces/point.interface'
import { GestureDirection } from '../enums/gesture-direction.enum'

export function IsInsideThreshold (pointA: Point, pointB: Point, threshold: number): boolean {
  return Math.abs(pointA.x - pointB.x) <= threshold && Math.abs(pointA.y - pointB.y) <= threshold
}

export function IsSamePoint (pointA: Point, pointB: Point): boolean {
  return pointA.x === pointB.x && pointA.y === pointB.y
}

export function GetPoint (evt: MouseEvent): Point {
  return {
    x: evt.screenX,
    y: evt.screenY
  }
}

export function GetDistance (pointA: Point, pointB: Point): number {
  return Math.max(Math.abs(pointA.x - pointB.x), Math.abs(pointA.y - pointB.y))
}

export function GetDirection (pointA: Point, pointB: Point, threshold: number): GestureDirection {
  let dir = ''
  const yDiff = pointB.y - pointA.y
  const xDiff = pointB.x - pointA.x
  dir += yDiff > threshold ? GestureDirection.Down : (yDiff < -threshold ? GestureDirection.Up : '')
  dir += xDiff > threshold ? GestureDirection.Right : (xDiff < -threshold ? GestureDirection.Left : '')
  return dir.length ? <GestureDirection>dir : null
}
