import Aurelia, { RouterConfiguration } from 'aurelia';
import { Store, StoreConfiguration, logMiddleware } from '@aurelia/store-v1';
import { initialState } from './store/initial';
import { gqlGrabAction } from './store/actions';
import { Pokedex } from './pokedex';

const au = Aurelia
  .register(StoreConfiguration.withInitialState(initialState), RouterConfiguration.customize({
    useHref: false,
  }))
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(Pokedex)
  
const store = au.container.get(Store)

store.registerAction("fetchLoad", gqlGrabAction);
store.dispatch("fetchLoad", "LOAD FETCH")
store.registerMiddleware(logMiddleware, "after", { logType: "log" });
console.log(store);

au.start();

  
