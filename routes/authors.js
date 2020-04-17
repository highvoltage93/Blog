const { Router } = require('express')
const router = Router()
const User = require('../models/user')


router.get('/', async(req, res) => {
    let users = await User.find()
    res.status(200)
    res.send(users)
})


module.exports = router