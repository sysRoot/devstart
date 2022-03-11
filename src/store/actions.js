import { client } from '../utilities/client';
import { POKEMON_FETCH } from '../utilities/queries/pokemon';
import { ITEMS_FETCH } from '../utilities/queries/items';

export const gqlGrabAction = async (state, aType) => {

  let newState = Object.assign({}, state)

  switch (aType) {
    case "LOAD FETCH": {
      await client.query(POKEMON_FETCH).toPromise().then(res => {
        console.log("Fetch Pokemon result", res.data.pokemon_v2_pokemon)
        newState.pokemon = [...res.data.pokemon_v2_pokemon]
      })
      await client.query(ITEMS_FETCH).toPromise().then(res => {
        console.log("Fetch Item result", res.data.pokemon_v2_item)
        newState.items = [...res.data.pokemon_v2_item]
      })
      return newState;
    }
    default: return state;
  }


}