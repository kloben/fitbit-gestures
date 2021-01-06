import {findElement} from "./helpers/find-element.helper";
import {Slide, SlideCallback, SlideConfig} from "./Slide";

export class SlideDetector extends Slide {
  private readonly element: Element;

  constructor(
    element: string | Element,
    slideCallback: SlideCallback,
    cfg?: SlideConfig
  ) {
    super(slideCallback, cfg);
    this.element = findElement(element);
    this.element.onmousedown = this._onMouseDown.bind(this);
    this.element.onmouseup = this._onMouseUp.bind(this);
    this.element.onmousemove = this._onMouseMove.bind(this);
  }
}
