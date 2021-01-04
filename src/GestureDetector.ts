import {SWIPE_DIR, SwipeConfig} from "./SwipeDetector";
import {DoubleTapConfig} from "./DoubleTapDetector";

export interface GestureConfig {

}

export class GestureDetector {
  private readonly element: Element;

  constructor(
    element: string | Element
  ) {
    return this;
  }

  onSwipe(swipeCallback: (dir: SWIPE_DIR) => any, swipeCfg?: SwipeConfig) {
    //add event listener
    return this;
  }

  onDoubleTap(doubleTapCallback: () => any, doubleTapCfg?: DoubleTapConfig) {
    //add event listener
    return this;
  }
}
