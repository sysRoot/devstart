import { gql } from '@urql/core';

export const ITEMS_FETCH = gql`
  query {
    pokemon_v2_item {
      name
      id
    }
  }
`