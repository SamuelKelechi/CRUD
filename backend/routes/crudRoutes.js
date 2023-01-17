const express = require('express')
const router = express.Router()
const {getCruds, postCruds, updateCruds, deleteCruds} = require('../controllers/crudController')

router.get('/', getCruds)

router.post('/', postCruds)

router.put('/:id', updateCruds)

router.delete('/:id', deleteCruds)

module.exports = router