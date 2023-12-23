// creating all handlers for our routes

import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try{
        // retrieving all posts we have in database
        const postMessages = await PostMessage.find();

        // console.log(postMessages);  no need, we're returning it

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) =>{
    const post = req.body;

    const newPost = new PostMessage(post);

    try { 
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
