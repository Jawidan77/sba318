// data/comments.js

const comments = [
    {
      id: 1,
      postId: 1,   // ID of the post this comment belongs to
      content: "Great article!"
    },
    {
      id: 2,
      postId: 2,
      content: "Very informative."
    }
  ];
  
  // Function to get comments by post
  function getCommentsByPost(postId) {
    return comments.filter(comment => comment.postId == postId);
  }
  
  // Function to add a new comment
  function addComment(newComment) {
    newComment.id = Date.now();
    comments.push(newComment);
  }
  
  // Function to delete a comment
  function deleteComment(id) {
    const index = comments.findIndex(comment => comment.id == id);
    if (index !== -1) {
      comments.splice(index, 1);
    }
  }
  
  // Export the functions
  export default {
    getCommentsByPost,
    addComment,
    deleteComment
  };
  