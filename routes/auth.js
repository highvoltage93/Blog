const { Router } = require('express')
const bcrypt = require('bcryptjs')
const router = Router()
const User = require('../models/user')
const config = require('config')
const jwt = require('jsonwebtoken')
    // const upload = require('../midleware/upload')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/[\/\\:]/g, "_") + file.originalname)
    }
})
const upload = multer({ storage: storage })



router.post('/register', upload.single('avatar'), (req, res) => {
    const { name, password, email } = req.body
    let avatar = req.file ? req.file.path : ''
    if (!name || !password || !email) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }
    User.findOne({ email })
        .then(user => {
            if (user) res.status(400).json({ msg: 'User already exists' })
            const newUser = new User({
                name,
                email,
                password,
                avatar
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash
                    newUser.save()
                        .then(user => {
                            jwt.sign({ id: user.id },
                                config.get('jwtSecret'), { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    })
                                }
                            )

                        })
                })
            })
        })
})


router.post('/logIn', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" })
    }

    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: "User does not exist" })
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })
                    jwt.sign({ id: user.id },
                        config.get('jwtSecret'), { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
        })
})


router.get('/user', (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => {
            res.json(user)
        })
})



module.exports = router