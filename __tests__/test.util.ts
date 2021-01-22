interface MouseEvent {
  readonly screenX: number;
  readonly screenY: number;
  readonly defaultPrevented: boolean;
  readonly target: any;
  readonly type: string;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
}

export class TestUtil {
  static getMouseEvent (x: number, y: number): MouseEvent {
    return {
      screenX: x,
      screenY: y,
      defaultPrevented: false,
      target: null,
      type: 'MouseEvent',
      preventDefault: () => {},
      stopImmediatePropagation: () => {},
      stopPropagation: () => {}
    }
  }
}
