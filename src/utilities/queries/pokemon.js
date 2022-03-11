import { gql } from '@urql/core';

export const POKEMON_FETCH = gql`
  query {
    pokemon_v2_pokemon {
      name
      id
    }
  }
`