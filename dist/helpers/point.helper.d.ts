import { Point } from '../interfaces/point.interface';
import { GestureDirection } from '../enums/gesture-direction.enum';
export declare function IsInsideThreshold(pointA: Point, pointB: Point, threshold: number): boolean;
export declare function IsSamePoint(pointA: Point, pointB: Point): boolean;
export declare function GetPoint(evt: MouseEvent): Point;
export declare function GetDirection(pointA: Point, pointB: Point, threshold: number): GestureDirection;
