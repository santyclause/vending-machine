import { router } from './router-config.js';
import { ItemController } from './controllers/ItemController.js';
import { NumpadController } from './controllers/NumpadController.js';
const USE_ROUTER = false

class App {

  ItemController = new ItemController();
  NumpadController = new NumpadController();

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
