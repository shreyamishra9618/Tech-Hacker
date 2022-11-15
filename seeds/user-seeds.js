const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'ShreyaM',
    email: 'shreym96@uw.edu',
    password: 'password1'
  },
  {
    username: 'Kittu',
    email: 'Kittu@gmail.com',
    password: 'password12'
  },
  {
    username: 'Suyash',
    email: 'Suyash@gmail.com',
    password: 'password123'
  },
  {
    username: 'Karma',
    email: 'Karma@gmail.com',
    password: 'password1234'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
