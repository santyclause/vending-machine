import { AppState } from "../AppState.js";

class ItemService {

  dispenseItem(selectedItem) {
    AppState.boughtItems.push(selectedItem);
  }
}

export const itemService = new ItemService();