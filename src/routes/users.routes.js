import express from 'express';
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from '../controllers/users.controller.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:user_id', getUserById);
router.put('/:user_id', updateUserById);
router.delete('/:user_id', deleteUserById);

export default router;
