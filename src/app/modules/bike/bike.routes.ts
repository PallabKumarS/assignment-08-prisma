import { Router } from 'express';
import { BikeController } from './bike.controller';

const router = Router();

// Define routes
router.get('/', BikeController.getAllBike);

router.post('/', BikeController.createBike);

router.get('/:id', BikeController.getSingleBike);

export const BikeRoutes = router;
