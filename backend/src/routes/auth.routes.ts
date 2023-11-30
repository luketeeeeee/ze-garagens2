import express from 'express';
import { AuthController } from '../controllers/auth';

const router = express.Router();

router.route('/login').post(AuthController.login);

export default router;
