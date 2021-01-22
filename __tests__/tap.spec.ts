import { TapPrivate } from '../src/gestures/TapPrivate'
import { TestUtil } from './test.util'

describe('Tap Gesture', () => {

  test('Test basic usage', () => {
    const cb = jest.fn();
    const gesture = new TapPrivate(cb);

    gesture.onMouseDown(TestUtil.getEvent(10, 15));

    expect(cb).toHaveBeenCalled()
  })
})
