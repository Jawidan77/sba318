import express from 'express';
const router = express.Router();
import userData from '../data/users.js';

// GET - List all users
router.get('/', (req, res) => {
  const users = userData.getUsers();
  res.json(users);
});

// POST - Create a new user
router.post('/', (req, res) => {
  const { name, email } = req.body;
  userData.addUser({ name, email });
  res.status(201).json({ message: 'User added successfully' });
});

// DELETE - Delete a user
router.delete('/:id', (req, res) => {
  userData.deleteUser(req.params.id);
  res.json({ message: 'User deleted successfully' });
});

export default router;
