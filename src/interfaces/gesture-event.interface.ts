import { Point } from './point.interface'
import { GestureDirection } from '../enums/gesture-direction.enum'
import { GestureType } from '../enums/gesture-type.enum'

export interface GestureEvent {
  type: GestureType,
  point: Point,
  from?: Point,
  dir?: GestureDirection,
  ended?: boolean
}
