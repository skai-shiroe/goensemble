import { PrismaClient } from './generated/client';
export { PrismaClient };
export * from './generated/client';

const globalForPrisma = globalThis as unknown as { goPrisma?: PrismaClient };
const prisma = globalForPrisma.goPrisma ?? new PrismaClient();
if (!globalForPrisma.goPrisma) globalForPrisma.goPrisma = prisma;

export default prisma;