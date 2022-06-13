const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.use('/', (req, res, next) => {
    res.status(200).json({ message : 'Hello User, you are here'})
})


app.listen(port, () => {
    console.log(`running on port ${port}`)
})