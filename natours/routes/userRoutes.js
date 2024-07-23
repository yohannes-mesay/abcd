const express = require('express');
const router = express.Router();
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
} = require('../controller/userController');

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser);
module.exports = router;
