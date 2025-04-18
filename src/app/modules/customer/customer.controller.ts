import { Request, Response } from 'express';
import { CustomerService } from './customer.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// get all customers
const getAllCustomer = catchAsync(async (req: Request, res: Response) => {
  const data = await CustomerService.getAllCustomerFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Customers retrieved successfully',
    data,
  });
});

// create customers
const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.createCustomerIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Customer created successfully',
    data: result,
  });
});

// get single customer
const getSingleCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CustomerService.getSingleCustomerFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Customer retrieved successfully',
    data: result,
  });
});

// update customer
const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CustomerService.updateCustomerIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Customer updated successfully',
    data: result,
  });
});

// delete customer
const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await CustomerService.deleteCustomerFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Customer deleted successfully',
    data: null,
  });
});

export const CustomerController = {
  getAllCustomer,
  createCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
