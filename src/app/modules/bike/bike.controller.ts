import { Request, Response } from 'express';
import { BikeService } from './bike.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// get all bike
const getAllBike = catchAsync(async (req: Request, res: Response) => {
  const data = await BikeService.getAllBikeFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bikes fetched successfully',
    data,
  });
});

// create bike
const createBike = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const result = await BikeService.createBikeIntoDB(data);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Bike added successfully',
    data: result,
  });
});

// git single bike
const getSingleBike = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await BikeService.getSingleBikeFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike fetched successfully',
    data,
  });
});

export const BikeController = { getAllBike, createBike, getSingleBike };
