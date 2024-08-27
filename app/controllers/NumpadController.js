import { AppState } from "../AppState.js";
import { numpadService } from "../services/NumpadService.js";

export class NumpadController {
  constructor() {

  }

  addToCode(num) {
    numpadService.addToCode(num);
    this.drawCode();
  }

  submitCode() {
    numpadService.submitCode()
    this.drawCode();
  }

  drawCode() {
    const inputElem = document.getElementById('input-field')
    inputElem.innerText = AppState.currentCode;
  }
}