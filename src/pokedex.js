import { connectTo, Store } from '@aurelia/store-v1'
import { inject } from 'aurelia';
import { gqlGrabAction } from './state/actions'


@inject(Store)
@connectTo()
export class Pokedex {
  constructor(store) {
    this.store = store;
    store.registerAction("GQLGrab", gqlGrabAction)
  }
}
