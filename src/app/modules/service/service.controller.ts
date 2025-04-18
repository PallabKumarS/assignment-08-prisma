import { Request, Response } from 'express';
import { ServiceService } from './service.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// get all services
const getAllService = catchAsync(async (req: Request, res: Response) => {
  const data = await ServiceService.getAllServiceFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service records fetched successfully',
    data,
  });
});

// create service
const createService = catchAsync(async (req: Request, res: Response) => {
  const data = await ServiceService.createServiceInDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Service record created successfully',
    data,
  });
});

// get single service
const getSingleService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await ServiceService.getSingleServiceFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service record fetched successfully',
    data,
  });
});

// update service
const updateService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await ServiceService.updateServiceInDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service marked as completed',
    data,
  });
});

// get overdue or pending services
const getDueServices = catchAsync(async (req: Request, res: Response) => {
  const data = await ServiceService.getDueServicesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Overdue or pending services fetched successfully',
    data,
  });
});

export const ServiceController = {
  getAllService,
  createService,
  getSingleService,
  updateService,
  getDueServices,
};
