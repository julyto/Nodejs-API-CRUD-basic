const express = require('express')
const router = express.Router()
const models = require('../models')

// Récupérer toutes les entrées d'une table
router.get('/all', (req, res) => {
    models.User.findAll()
    .then(users => res.send(users))
})

// Récupérer une entrée par son id passé dans l'url de requête
router.get('/user/:id', (req, res) => {
    models.User.findOne({
        where: { id: req.params.id }
    })
    .then(user => res.send(user))
})

// Créer une nouvelle entrée dans une table
router.post('/new', (req, res) => {
    models.User.create({
        username: req.body.username,
        email: req.body.email
    })
    .then(newUser => res.send(newUser))
})

// Modifier une entrée
router.put('/edit', (req, res) => {
    models.User.update({
        email: req.body.email
    },{
        where: {id : req.body.id}
    })
    .then(() => res.send('modification success'))
})

// Supprimer une entrée d'un table, id passé dans l'url de requête
router.delete('/delete/:id', (req, res) => {
    models.User.destroy({
        where: { id: req.params.id }
    })
    .then(() => res.send('success'))
})


module.exports = router