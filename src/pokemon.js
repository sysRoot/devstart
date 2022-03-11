import { connectTo } from '@aurelia/store-v1';
import { map } from 'rxjs/operators'

// import { Store } from '@aurelia/store-v1';
// import { inject } from 'aurelia';

@connectTo({ selector: (store) => store.state.pipe(map((store) => store.pokemon)) })
// @inject(Store)
export class Pokemon {
  constructor() {
  }
  message = 'POKEMON PAGE';
}
