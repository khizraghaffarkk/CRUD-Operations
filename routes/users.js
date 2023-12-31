import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
import {createUser, getUsers, getUser, deleteUser, updateUserPatch} from '../controllers/users.js';

let users = [];

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUserPatch);

export default router;