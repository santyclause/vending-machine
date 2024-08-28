import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { VendingItem } from './models/VendingItem.js'

class ObservableAppState extends EventEmitter {
  money = 2
  usedCodes = ['00']
  itemList = [
    new VendingItem('Doritos', 1.25),
    new VendingItem('Cheetos', 1.25),
    new VendingItem('Bugles', 1.25),
    new VendingItem('Cheez-its', 1.25),
    new VendingItem('Gatorade', 1.00)
  ]

  boughtItems = []

  currentCode = ''

}

export const AppState = createObservableProxy(new ObservableAppState())