import { Point } from './point.interface'
import { GESTURE_DIRECTION } from '../enums/gesture-direction.enum'
import { GESTURE_TYPE } from '../enums/gesture-type.enum'

export interface GestureEvent {
  type: GESTURE_TYPE,
  center: Point,
  from?: Point,
  dir?: GESTURE_DIRECTION
}
