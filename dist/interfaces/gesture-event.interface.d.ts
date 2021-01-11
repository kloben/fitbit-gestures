import { Point } from './point.interface';
import { GESTURE_DIRECTION } from '../enums/gesture-direction.enum';
import { GESTURE_TYPE } from '../enums/gesture-type.enum';
import { GESTURE_STATUS } from '../enums/gesture-status.enum';
export interface GestureEvent {
    type: GESTURE_TYPE;
    center: Point;
    from?: Point;
    dir?: GESTURE_DIRECTION;
    status?: GESTURE_STATUS;
}
