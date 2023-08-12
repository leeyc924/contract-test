import { todoList } from './db/todo';
import express from 'express';

const router = express.Router();

router.get('/list', async (req, res) => {
  try {
    res.json(todoList);
  } catch (error) {
    res.status(400).json(error);
  }
});

export default router;
