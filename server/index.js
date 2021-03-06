const { join, extname } = require('path')
const express = require('express')
const volleyball = require('volleyball')
const api = require('./api')

const app = express()

app.use(volleyball)

app.use('/api', api)

app.use(express.static(join(__dirname, '..', 'public')))

// statically serve our CSS framework
app.use(express.static(join(__dirname, '..', 'node_modules', 'bulma', 'css')))

// statically serve our seed images – normally we would host these, e.g. on S3
app.use(
    '/images',
    express.static(join(__dirname, '..', 'scripts', 'seed-images'))
)

app.use('/api/boards', require('./api/boards'))

app.use('/api/pins', require('./api/pins'))


// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
    if (extname(req.path).length) {
        const err = new Error('Not found')
        err.status = 404
        next(err)
    } else {
        next()
    }
})

// sends index.html as a fallback, to support linking to front-end routes
app.use('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public/index.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

module.exports = app
