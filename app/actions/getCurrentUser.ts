import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prismadb";

export async function getUserSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUer() {
  try {
    const session = await getUserSession();
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (err) {
    return null;
  }
}
