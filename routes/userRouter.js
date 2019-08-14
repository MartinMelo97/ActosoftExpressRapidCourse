const express = require('express')
const router = express.Router()
const User = require('../models/User')

// List users
router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

// Find One User
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

module.exports = router