const { PrismaClient } = require('@prisma/client');
// import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const typesArray = ['Electric', 'Mouse']; // Example array
  // Serialize array to JSON string
  const typesJson = JSON.stringify(typesArray);
  const bulbasaur = await prisma.pokemon.create({
    data: {
      name: 'Bulbasaur',
      types: typesJson,
      sprite: 'https://pokemon.com/pictures/bulbasaur.png',
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
