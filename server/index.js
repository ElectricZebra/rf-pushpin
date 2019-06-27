const { join } = require('path')
const express = require('express')

const app = express()

app.use(express.static(join(__dirname, '..', 'public')))

app.use(express.static(join(__dirname, '..', 'node_modules', 'bulma', 'css')))

// allows successful linking to front-end routes
app.get('/:page/', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

module.exports = app
