import express from 'express';
const router = express.Router();
import postData from '../data/posts.js';

// GET - List all posts
router.get('/', (req, res) => {
  const posts = postData.getPosts();
  res.render('index', { posts });
});

// POST - Create a new post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  postData.addPost({ title, content });
  res.redirect('/posts');
});

// PUT - Update a post
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  postData.updatePost(id, { title, content });
  res.redirect('/posts');
});

// DELETE - Delete a post
router.delete('/:id', (req, res) => {
  postData.deletePost(req.params.id);
  res.redirect('/posts');
});

export default router;
