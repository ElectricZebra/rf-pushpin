const { db } = require('../server/db')

async function seed () {
    await db.sync({force: true})
}

seed()
.catch(err => {
    console.error('Problem seeding:', err)
})
.finally(() => db.close())
