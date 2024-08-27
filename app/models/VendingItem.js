import { AppState } from "../AppState.js";

export class VendingItem {
  constructor(name, price) {
    this.name = name;
    this.imageName = name + '.png';
    this.price = price;
    this.code = this.genCode();
  }

  get genCode() {
    let lastIndex = AppState.usedCodes.length - 1;
    let foundCode = parseInt(AppState.usedCodes[lastIndex]);
    let newCode = foundCode++;
    let codeToString = '';

    if (newCode < 10) {
      codeToString = '0';
    }
    codeToString += newCode.toString();

    AppState.usedCodes.push(codeToString);
    return codeToString;
  }

  get elementTemplate() {
    return `
            <div class="col-2">
              <div class="item d-flex align-items-end" style="background-image: url(assets/img/${this.imageName})">
                <div class="item-desc d-flex justify-content-between align-items-end flex-grow-1">
                  <div>
                    <p>${this.name}</p>
                    <p>$${this.price}</p>
                  </div>
                  <div>
                    <p>${this.code}</p>
                  </div>
                </div>
              </div>
            </div>`
  }
}