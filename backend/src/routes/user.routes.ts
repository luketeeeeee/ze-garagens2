import express from 'express';
import { UserController } from '../controllers/user';

const router = express.Router();

router.route('/').get(UserController.findAll);
router.route('/:userId').get(UserController.findById);
router.route('/').post(UserController.create);
router.route('/:userId').put(UserController.update);
router.route('/:userId').delete(UserController.remove);

// auth related routes
// ...

export default router;
