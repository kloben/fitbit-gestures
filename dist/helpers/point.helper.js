import { GestureDirection } from '../enums/gesture-direction.enum';
export function IsInsideThreshold(pointA, pointB, threshold) {
    return Math.abs(pointA.x - pointB.x) <= threshold && Math.abs(pointA.y - pointB.y) <= threshold;
}
export function IsSamePoint(pointA, pointB) {
    return pointA.x === pointB.x && pointA.y === pointB.y;
}
export function GetPoint(evt) {
    return {
        x: evt.screenX,
        y: evt.screenY
    };
}
export function GetDirection(pointA, pointB, threshold) {
    var dir = '';
    var yDiff = pointB.y - pointA.y;
    var xDiff = pointB.x - pointA.x;
    dir += yDiff > threshold ? GestureDirection.Down : (yDiff < -threshold ? GestureDirection.Up : '');
    dir += xDiff > threshold ? GestureDirection.Right : (xDiff < -threshold ? GestureDirection.Left : '');
    return dir.length ? dir : null;
}
