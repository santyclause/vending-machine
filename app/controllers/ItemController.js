import { AppState } from "../AppState.js";
import { itemService } from "../services/ItemService.js";

export class ItemController {
  constructor() {
    this.drawItems();
    AppState.on('boughtItems', this.drawBoughtItems)
    AppState.on('money', this.drawMoney)
  }

  drawItems() {
    const itemsElem = document.getElementById('items');
    let items = AppState.itemList;
    let itemsCont = '';

    items.forEach((item) => itemsCont += item.elementTemplate)

    itemsElem.innerHTML = itemsCont;
  }

  drawBoughtItems() {
    const outputElem = document.getElementById('output');
    let boughtItems = AppState.boughtItems
    let outputCont = '';

    boughtItems.forEach((item) => outputCont += item.elementTemplate)

    outputElem.innerHTML = outputCont;
  }

  addMoney() {
    itemService.addMoney();
  }

  drawMoney() {
    const moneyElem = document.getElementById('money')
    moneyElem.innerText = AppState.money.toFixed(2)
  }
}