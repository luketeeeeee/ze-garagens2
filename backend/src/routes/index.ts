import express, { Response } from 'express';
import userRoutes from './user.routes';
import garageRoutes from './garage.routes';

const router = express.Router();

router.get('/api/v1', async (_, res: Response) => {
  res.send('api - ok');
});

router.use('/api/v1/users', userRoutes);
router.use('/api/v1/garages', garageRoutes);

export default router;
