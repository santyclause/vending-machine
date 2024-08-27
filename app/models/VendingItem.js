import { AppState } from "../AppState.js";

export class VendingItem {
  constructor(name, price) {
    this.name = name;
    this.imageName = name + '.png';
    this.price = price;
  }

  get genCode() {
    // let lastIndex = AppState.usedCodes.length - 1;
    // let foundCode = parseInt(AppState.usedCodes[lastIndex]);
    // let newCode = foundCode++;
    // let codeToString = '';

    let indexOfItem = (AppState.itemList.findIndex(item => item.name == this.name) + 1)

    if (indexOfItem < 10) {
      indexOfItem = '0' + indexOfItem.toString();
    }

    return indexOfItem;
  }

  get elementTemplate() {
    return `
            <div class="col-3">
              <div class="item d-flex align-items-end" style="background-image: url(assets/img/${this.imageName})">
                <div class="item-desc d-flex justify-content-between align-items-end flex-grow-1">
                  <div>
                    <p>${this.name}</p>
                    <p>$${this.price.toFixed(2)}</p>
                  </div>
                  <div>
                    <p>${this.genCode}</p>
                  </div>
                </div>
              </div>
            </div>`
  }
}