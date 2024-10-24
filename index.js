// index.js

// Import all the routes
import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';
import commentRoutes from './routes/comment.js'; // Optional: Use only if you're using comments

// Export the routes so they can be used in server.js
export {
  postRoutes,
  userRoutes,
  commentRoutes
};
