import express from 'express';
import { GarageController } from '../controllers/garage';

const router = express.Router();

router.route('/').get(GarageController.findAll);
router.route('/:garageId').get(GarageController.findById);
router.route('/').post(GarageController.create);
router.route('/:garageId').put(GarageController.update);
router.route('/:garageId').delete(GarageController.delete);

// auth related routes
// ...

export default router;
