// data/posts.js

// data/posts.js

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post"
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post"
  }
];

// Function to get all posts
function getPosts() {
  return posts;
}

// Function to add a new post
function addPost(newPost) {
  newPost.id = Date.now();
  posts.push(newPost);
}

// Function to update a post
function updatePost(id, updatedPost) {
  const index = posts.findIndex(post => post.id == id);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedPost };
  }
}

// Function to delete a post
function deletePost(id) {
  const index = posts.findIndex(post => post.id == id);
  if (index !== -1) {
    posts.splice(index, 1);
  }
}

// Export the functions
export default {
  getPosts,
  addPost,
  updatePost,
  deletePost
};
