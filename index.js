const express = require('express')
const config = require('config')
const mongoose = require('mongoose');
const blogRoute = require('./routes/blogs')
const authRoute = require('./routes/auth')
const authorsRoute = require('./routes/authors')

const server = express()


mongoose
    .connect(config.get('MONGO'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB started'))
    .catch(err => console.log(`Mongoose ${err}`))


server.listen(config.get('PORT'), () => {
    console.log(`server start on ${config.get('PORT')}`)
})

server.use('/uploads', express.static('uploads'))
server.use(express.json())
server.use('/', blogRoute)
server.use('/auth/', authRoute)
server.use('/authors/', authorsRoute)
    // npm run start
    // npm run dev  --MERN