import {findElement} from "./helpers/find-element.helper";

export interface SlideConfig {

}

export class SlideDetector {
  private readonly element: Element;

  constructor(
    element: string | Element,

  ) {
    this.element = findElement(element);
    this.element.onmousedown = this._onMouseDown.bind(this);
    this.element.onmouseup = this._onMouseUp.bind(this);
  }

  private _onMouseDown(evt: MouseEvent) {
  }

  private _onMouseUp(evt: MouseEvent) {

  }
}

