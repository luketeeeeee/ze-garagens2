import { findAll } from './find-all';
import { findById } from './find-by-id';
import { create } from './create';
import { update } from './update';
import { remove } from './delete';
import { findByOwnerId } from './find-by-owner-id';

export const GarageController = {
  findAll,
  findById,
  create,
  update,
  remove,
  findByOwnerId,
};
