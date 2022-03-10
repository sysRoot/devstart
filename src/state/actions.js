import { client } from '../utilities/client'


export const gqlGrabAction = (state, aType, payload) => {

  switch (aType) {
    case "POKEMON FETCH": {
      break
    }
    case "ITEM FETCH": {
      break
    }
    default: return state;
  }


  console.log(client)

}