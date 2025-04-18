/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { PrismaClient } from '@prisma/client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '../../../generated/client';
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
  console.log(id);

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
