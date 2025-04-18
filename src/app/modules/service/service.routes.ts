import { Router } from 'express';
import { ServiceController } from './service.controller';

const router = Router();

// Define routes
router.get('/', ServiceController.getAllService);

router.get('/status', ServiceController.getDueServices);

router.post('/', ServiceController.createService);

router.get('/:id', ServiceController.getSingleService);

router.put('/:id/complete', ServiceController.updateService);

export const ServiceRoutes = router;
