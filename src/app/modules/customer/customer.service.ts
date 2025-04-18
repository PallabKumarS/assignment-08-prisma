import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// get all customers from database
const getAllCustomerFromDB = async () => {
  const result = await prisma.customer.findMany();

  return result;
};

// get single customer from db
const getSingleCustomerFromDB = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  return result;
};

// create customer into db
const createCustomerIntoDB = async (data: any) => {
  const result = await prisma.customer.create({
    data,
  });

  return result;
};

// update customer into db
const updateCustomerIntoDB = async (id: string, payload: any) => {
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });
  
  return result;
};

// delete customer from db
const deleteCustomerFromDB = async (id: string) => {
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
