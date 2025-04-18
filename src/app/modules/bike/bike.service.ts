import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Get all bikes from the database
const getAllBikeFromDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

// create bike into database
const createBikeIntoDB = async (data: any) => {
  const result = await prisma.bike.create({ data });
  return result;
};

// Get single bike from the database
const getSingleBikeFromDB = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });

  return result;
};

export const BikeService = {
  getAllBikeFromDB,
  createBikeIntoDB,
  getSingleBikeFromDB,
};
