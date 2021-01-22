export class TestUtil {
  static getEvent (x: number, y: number): MouseEvent {
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
