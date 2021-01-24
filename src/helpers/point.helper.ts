import { Point } from '../interfaces/point.interface'

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
