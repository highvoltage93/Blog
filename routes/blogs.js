const { Router } = require('express')
const router = Router()
const blogSchema = require('../models/blog')
    // const auth = require('../midleware/auth')
    // for authorization

router.get('/blog', async(req, res) => {
    const blog = await blogSchema.find()
    res.status(200)
    res.send(blog)
})

router.get('/post/:id', async(req, res) => {
    const blog = await blogSchema.findById(req.params.id)
    res.status(200)
    res.send(blog)
})

router.post('/blog', (req, res) => {
    const newBlog = new blogSchema({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        author: {
            id: req.body.id,
            authorName: req.body.authorName
        }

    })
    newBlog.save().then()
    res.status(200)
})




module.exports = router