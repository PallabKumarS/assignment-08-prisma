import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllRecordFromDB = async () => {
  // Replace 'yourModel' with actual Prisma model name
  const result = await prisma.record.findMany();
  return result;
};

export const RecordService = { getAllRecordFromDB };