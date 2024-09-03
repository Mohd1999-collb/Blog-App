const express = require('express');
const { getAllBlogsController, createBlogController, getBlogByIdController, updateBlogController, deleteBlogController, userBlogControlller } = require('../controllers/blogController');
const Routes = express.Router();

// GET /posts (list all posts)
// POST /posts (create a new post)

// GET /posts/:id (get a specific post)
// PUT /posts/:id (update a post)
// DELETE /posts/:id (delete a post)

Routes.route('/posts').get(getAllBlogsController).post(createBlogController);

Routes.route('/posts/:id').get(getBlogByIdController).put(updateBlogController).delete(deleteBlogController);
Routes.route('/user-blog/:id').get(userBlogControlller);


module.exports = Routes;