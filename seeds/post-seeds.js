const { Post } = require('../models');

const postdata = [
  {
    title: "Frontend tricks that most Frontend Developers don’t know about",
    post_text: "1. Datalist element One HTML element that you don’t see used much at all and for no reason! The <datalist> tag is used to provide an autocomplete feature for <input>elements You will see a drop-down list of pre-defined options as you type.",
    user_id: 1
  },
  {
    title: 'Tip : Start with learning the basics',
    post_text: 'I’ve seen many developers trying to get started with frameworks such as React, but are really struggling to learn it. This is mainly due to the lacking knowledge of the actual basics of Javascript in general. Start by learning JS before learning a framework. If you know the foundation, you will find it a lot easier to learn new things and build out your skills from there, the right way!',
    user_id: 2
  },
  {
    title: 'Kill your darlings',
    post_text: "Don’t get too attached to your code! Often you will need to refactor it, or someone does a code review of it, and you will need to trash it or refactor it. Always be critical of your own code. Start over if needed. If someone has a better solution, consider it. Being too attached to code is can be an obstruction to having a better code-base. Code doesn’t always have to be yours to be valuable. Remember this.",
    user_id: 3
  },
  {
    title: 'Make use of ESLint or Prettier',
    post_text: 'Try to automate as much as possible. Make use of ESLint or Prettier to align code-style across teams. Life is too short to argue about coding style, tabs vs spaces etc. Once you start up a project, set up this A.S.A.P.It will save you and your team discussions and time later on.',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
