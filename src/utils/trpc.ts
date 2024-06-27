import { createReactQueryHooks } from '@trpc/react'
import type { PokemonRouter } from '@/server/routers/pokemon'

export const trpc = createReactQueryHooks<PokemonRouter>()
