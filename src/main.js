import Aurelia, { RouterConfiguration } from 'aurelia';
import { StoreConfiguration } from '@aurelia/store-v1';
import { initialState } from './state/initial'
import { Pokedex } from './pokedex';

Aurelia
  .register(StoreConfiguration.withInitialState(initialState), RouterConfiguration)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(Pokedex)
  .start();

  
