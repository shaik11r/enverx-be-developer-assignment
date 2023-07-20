const Blog = require("../models/blogmodel");
const { validationResult } = require("express-validator");
const createBlog = async (req, res) => {
  try {
    if (req.body.title.split("").length < 3) {
      return res.status(400).send({
        message: "title should be more than 2 letters",
      });
    } else if (req.body.content.split(" ").length < 10) {
      return res.status(400).send({
        message: "content should be more than 10 words",
      });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { title, content } = req.body;
    const newPost = new Blog({ title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    return res.status(500).send({
      message: "hi something went wrong",
    });
  }
};
const getAllBlog = async (req, res) => {
  try {
    const posts = await Blog.find();
    return res.status(200).send({
      data: posts,
    });
  } catch (err) {
    return res.status(500).send({
      message: "some thing went wrong while fetching data",
    });
  }
};
const getBlog = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (!post) {
      return res.status(404).send({
        error: "Post not found",
      });
    }
    res.status(200).send({
      data: post,
    });
  } catch (err) {
    return res.status(500).send({ error: "Internal server error" });
  }
};
const updateBlog=async(req,res)=>{
    try{
        const postId=req.params.id;
        const UpdatedPost=await Blog.findByIdAndUpdate(
            postId,{...req.body},{new:true}
        )
        if(!UpdatedPost){
            return res.status(404).send({
                error:'blog not found'
            })
        }
         res.status(200).send({
            data:UpdatedPost
         });
    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            error:'Internal server error'
        })
    }
}

const deleteBlog=async(req,res)=>{
    try{
        const postId=req.params.id;
        const deletedPost=await Blog.findByIdAndDelete(postId);
        if(!deletedPost){
            return res.status(404).send({
                error:'Blog not found'
            })
        }
        res.status(204).end();
    }
    catch(err){
        return res.status(500).send({
            message:'Internal server error'
    })
    }
}

module.exports = {
  createBlog,
  getAllBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};
