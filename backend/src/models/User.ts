import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(user: User) {
  return await prisma.user.create({ data: user });
}
