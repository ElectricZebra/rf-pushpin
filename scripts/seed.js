const path = require('path')
const fs = require('fs').promises
const { promisify } = require('util')
const sizeof = promisify(require('image-size'))
const { db, Pin } = require('../server/db')

async function seed() {
    // sync Sequelize models against database
    await db.sync({ force: true })

    // read in the seed image filenames
    const filenames = await fs.readdir(path.join(__dirname, 'seed-images'))
    const images = filenames.filter(filename =>
        ['.jpg', '.jpeg'].includes(path.extname(filename))
    )

    // create rows in the pins table

    const imagePromises = images.map(async filename => {
        const { width, height } = await sizeof(
            path.join(__dirname, 'seed-images', filename)
        )

        return Pin.create({
            imageUrl: `/images/${filename}`,
            description: path.parse(filename).name,
            width,
            height,
        })
    })

    await Promise.all(imagePromises)
}

seed()
    .catch(err => {
        console.error('Problem seeding:', err)
    })
    .finally(() => db.close())
