import { AppState } from "../AppState.js";

class ItemService {

  dispenseItem(selectedItem) {
    AppState.boughtItems.push(selectedItem);
    AppState.money -= selectedItem.price;
  }

  addMoney() {
    AppState.money += 0.25;
  }
}

export const itemService = new ItemService();