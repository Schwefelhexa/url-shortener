import { PrismaClient, Prisma } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await db.redirect.createMany({ data: getRedirects() });
}

seed();

function getRedirects(): Prisma.RedirectCreateManyInput[] {
  return [
    {
      slug: "test123",
      target: "https://google.com",
    },
    {
      slug: "othertest",
      target: "https://youtube.com",
    },
  ];
}
