import {InitConfig} from "./interfaces/init-config";
import document from "document";

export class SwipeDetector {
  private readonly element: Element;

  constructor(element: any | string, cfg?: InitConfig) {
    if (typeof element === 'string') {
      this.element = document.getElementById(element);
    } else {
      this.element = element;
    }

    if (!this.element) {
      throw new Error('Element not found');
    }
  }

}
