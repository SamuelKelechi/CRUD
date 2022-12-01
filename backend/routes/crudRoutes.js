const express = require('express')
const router = express.Router()
const {getCruds} = require('../controllers/crudController')

router.get('/', getCruds)

router.post('/', (req, res) => {
    res.status(200).json({message: "Post Messages"})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update Messages ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message:  `Delete Messages ${req.params.id}`})
})

module.exports = router