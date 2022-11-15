const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Thanks its really a nice tip! I earlier used google autocomplete feature  ',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Thanks for sharing.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Yuo totally agree!',
    user_id: 2,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
