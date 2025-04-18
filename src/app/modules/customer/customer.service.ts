/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';

import { PrismaClient } from '../../../../prisma/generated/client';
import { AppError } from '../../errors/AppError';

const prisma = new PrismaClient();

// get all customers from database
const getAllCustomerFromDB = async (): Promise<any> => {
  const result = await prisma.customer.findMany();

  return result;
};

// get single customer from db
const getSingleCustomerFromDB = async (id: string): Promise<any> => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Customer not found');
  }

  return result;
};

// create customer into db
const createCustomerIntoDB = async (data: any): Promise<any> => {
  const result = await prisma.customer.create({
    data,
  });

  return result;
};

// update customer into db
const updateCustomerIntoDB = async (id: string, payload: any): Promise<any> => {
  const isExist = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Customer not found');
  }

  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });

  return result;
};

// delete customer from db
const deleteCustomerFromDB = async (id: string): Promise<any> => {
  const isExist = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Customer not found');
  }

  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });

  return result;
};

export const CustomerService = {
  getAllCustomerFromDB,
  getSingleCustomerFromDB,
  createCustomerIntoDB,
  updateCustomerIntoDB,
  deleteCustomerFromDB,
};
