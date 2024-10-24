// data/users.js

const users = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com'
  }
];

// Function to get all users
function getUsers() {
  return users;
}

// Function to add a new user
function addUser(newUser) {
  newUser.id = Date.now();
  users.push(newUser);
}

// Function to delete a user
function deleteUser(id) {
  const index = users.findIndex(user => user.id == id);
  if (index !== -1) {
    users.splice(index, 1);
  }
}

// Export the functions
export default {
  getUsers,
  addUser,
  deleteUser
};
