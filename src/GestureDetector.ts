import {DoubleTapConfig} from "./DoubleTapDetector";
import {SWIPE_DIR, SwipeConfig} from "./Swipe";

export interface GestureConfig {

}

export class GestureDetector {
  private readonly element: Element;
  private readonly upFunctions: Array<Function> = null;
  private readonly downFunctions: Array<Function> = null;
  private readonly moveFunctions: Array<Function> = null;

  constructor(
    element: string | Element,
    cfg?: GestureConfig
  ) {
    return this;
  }

  private _initUp () {
    this.element.onmouseup = (evt: MouseEvent) => {
      this.upFunctions.forEach((fn: Function) => fn(evt));
    }
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
