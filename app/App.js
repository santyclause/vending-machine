import { router } from './router-config.js';
import { ItemController } from './controllers/ItemController.js';
const USE_ROUTER = false

class App {

  ItemController = new ItemController();

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
