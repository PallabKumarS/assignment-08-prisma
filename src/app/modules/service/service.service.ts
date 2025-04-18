/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { PrismaClient } from '@prisma/client';

import { PrismaClient } from "../../../generated/client";

/* eslint-disable @typescript-eslint/no-explicit-any */
const prisma = new PrismaClient();

// Get all services from the database
const getAllServiceFromDB = async (): Promise<any> => {
  const result = await prisma.serviceRecord.findMany();

  return result;
};

// create service into  database
const createServiceInDB = async (data: any): Promise<any> => {
  const result = await prisma.serviceRecord.create({
    data,
  });

  return result;
};

// get single service from database
const getSingleServiceFromDB = async (id: string): Promise<any> => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });

  return result;
};

// update service into database
const updateServiceInDB = async (id: string, payload: any): Promise<any> => {
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: {
      status: 'done',
      completionDate: payload?.completionDate
        ? new Date(payload?.completionDate)
        : new Date(),
    },
  });

  return result;
};

// get all services from database
const getDueServicesFromDB = async () => {
  const result = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          OR: [{ status: 'pending' }, { status: 'in_progress' }],
        },
        {
          serviceDate: {
            lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          },
        },
      ],
    },
  });

  return result;
};

export const ServiceService = {
  getAllServiceFromDB,
  createServiceInDB,
  getSingleServiceFromDB,
  updateServiceInDB,
  getDueServicesFromDB,
};
