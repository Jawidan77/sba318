import express from 'express';
const router = express.Router();
import commentData from '../data/comments.js'; // Import comment data module

// GET - Get all comments for a specific post
router.get('/:postId', (req, res) => {
  const { postId } = req.params;
  const comments = commentData.getCommentsByPost(postId);
  res.json(comments);
});

// POST - Add a new comment to a post
router.post('/:postId', (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  commentData.addComment({ postId, content });
  res.status(201).json({ message: 'Comment added successfully' });
});

// DELETE - Delete a comment
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  commentData.deleteComment(id);
  res.json({ message: 'Comment deleted successfully' });
});

export default router;
