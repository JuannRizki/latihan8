const db = require('./db.config');

// Model User (berisi query dasar)
const User = {
  
  // Get all users
  getAll: (callback) => {
    db.query('SELECT * FROM users', callback);
  },

  // Get user by ID
  getById: (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
  },

  // Create new user
  create: (data, callback) => {
    db.query(
      'INSERT INTO users (name, email) VALUES (?, ?)', 
      [data.name, data.email], 
      callback
    );
  },

  // Update user
  update: (id, data, callback) => {
    db.query(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [data.name, data.email, id],
      callback
    );
  },

  // Delete user
  delete: (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
  }

};

module.exports = User;
