import { AppState } from "../AppState.js";

class NumpadService {

  addToCode(num) {
    AppState.currentCode += num.toString();
    if (AppState.currentCode.length > 2) {
      AppState.currentCode = '';
    }
  }

  submitCode() {
    let selectedItem = AppState.itemList.find((item) => item.genCode == AppState.currentCode);
    AppState.currentCode = '';

    if (selectedItem == undefined) {
      window.alert("Invalid Code!")
      return
    }


  }
}

export const numpadService = new NumpadService();