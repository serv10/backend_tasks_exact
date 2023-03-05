import { Router } from 'express';
import {
   completeTask,
   deleteTask,
   getTasks,
   saveTask,
} from '../controllers/tasks.js';

const router = Router();

router.get('/tasks', getTasks);
router.post('/tasks', saveTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', completeTask);

export default router;
