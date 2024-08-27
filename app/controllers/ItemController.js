import { AppState } from "../AppState.js";

export class ItemController {
  constructor() {
    this.drawItems();
  }

  drawItems() {
    const itemsElem = document.getElementById('items');
    let items = AppState.itemList;
    let itemsCont = '';

    items.forEach((item) => itemsCont += item.elementTemplate)

    itemsElem.innerHTML = itemsCont;
  }
}