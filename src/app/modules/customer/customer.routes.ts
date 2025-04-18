import { Router } from 'express';
import { CustomerController } from './customer.controller';

const router = Router();

// Define routes
router.get('/', CustomerController.getAllCustomer);

router.get('/:id', CustomerController.getSingleCustomer);

router.post('/', CustomerController.createCustomer);

router.patch('/:id', CustomerController.updateCustomer);

router.delete('/:id', CustomerController.deleteCustomer);

export const CustomerRoutes = router;
