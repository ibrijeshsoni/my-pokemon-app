import * as trpcNext from '@trpc/server/adapters/next'
import { pokemonRouter } from '@/server/routers/pokemon'

export default trpcNext.createNextApiHandler({
  router: pokemonRouter,
  createContext: () => ({}),
})
