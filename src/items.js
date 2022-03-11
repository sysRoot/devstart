import { connectTo } from '@aurelia/store-v1';
import { map } from 'rxjs/operators'

@connectTo({selector: (store) => store.state.pipe(map(store => store.items))})
export class Items {
  message = 'Items PAGE';
}
