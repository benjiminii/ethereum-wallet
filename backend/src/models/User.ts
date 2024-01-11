import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function findUser(walletAddress: string) {
  return await prisma.user.findUnique({
    where: { walletAddress: walletAddress },
  });
}

export async function createUser(wallet: string) {
  return await prisma.user.create({ data: { walletAddress: wallet } });
}

export async function createUserInfo(user: User) {
  return await prisma.user.update({
    where: { walletAddress: user.walletAddress },
    data: user,
  });
}
