import { createClient } from "@urql/core"

export const client = createClient({
  url: 'https://beta.pokeapi.co/graphql/v1beta'
})