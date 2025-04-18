/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';

import { PrismaClient } from '../../../../prisma/generated/client';
import { AppError } from '../../errors/AppError';

const prisma = new PrismaClient();

// Get all bikes from the database
const getAllBikeFromDB = async (): Promise<any> => {
  const result = await prisma.bike.findMany();

  return result;
};

// create bike into database
const createBikeIntoDB = async (data: any): Promise<any> => {
  const result = await prisma.bike.create({ data });

  return result;
};

// Get single bike from the database
const getSingleBikeFromDB = async (id: string): Promise<any> => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Bike not found');
  }

  return result;
};

export const BikeService = {
  getAllBikeFromDB,
  createBikeIntoDB,
  getSingleBikeFromDB,
};
