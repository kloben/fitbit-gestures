import { Point } from '../interfaces/point.interface'

export function IsInsideThreshold (pointA: Point, pointB: Point, threshold: number): boolean {
  return Math.abs(pointA.x - pointB.x) <= threshold && Math.abs(pointA.y - pointB.y) <= threshold
}
