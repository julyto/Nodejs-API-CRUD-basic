const express = require('express')
const db = require('./models')
const PORT = process.env.PORT || 3000

const apiRoutes = require('./routes/apiRoutes')

var app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes)

// Synchronisation avec la bdd avant le démarrage du serveur
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Serveur en écoute sur le port ${PORT}`)
    })
}).catch((err) => {
    console.log("Le serveur n'a pas pu démarrer")
    console.log('error: ' + err)
})