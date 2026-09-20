import { Prisma, PrismaClient } from './generated/client';
export { PrismaClient };
export { Prisma };
export * from './generated/client';

// Helper partagé — détecte une violation de contrainte @unique / @id
// (code Prisma P2002) pour retourner un 409 exploitable côté mobile au lieu
// d'un 500 brut. Utilisé notamment par PUT /users/me (phone déjà pris).
export function isUniqueViolation(error: unknown): boolean {
  return (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === 'P2002'
  );
}

const globalForPrisma = globalThis as unknown as { goPrisma?: PrismaClient };
const prisma = globalForPrisma.goPrisma ?? new PrismaClient();
if (!globalForPrisma.goPrisma) globalForPrisma.goPrisma = prisma;

export default prisma;