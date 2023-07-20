const express=require('express');
const router=express.Router();
const BlogController=require('../../controllers/blogController')
console.log('hi')
router.post('/api/posts',BlogController.createBlog);
router.get('/api/posts',BlogController.getAllBlog);
router.get('/api/posts/:id',BlogController.getBlog);
router.put('/api/posts/:id',BlogController.updateBlog);
router.delete('/api/posts/:id',BlogController.deleteBlog);
module.exports=router;
