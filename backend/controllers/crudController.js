const getCruds = (req, res) => {
    res.status(200).json({message: 'Get Crud'})
}

const postCruds = (req, res) => {
    res.status(200).json({message: 'Post Crud'})
}

const updateCruds = (req, res) => {
    res.status(200).json({message: `Update CRUD ${req.params.id}`})
}

const deleteCruds = (req, res) => {
    res.status(200).json({message: `Delete CRUD ${req.params.id}`})
}
 

module.exports = {
    getCruds,
    postCruds,
    updateCruds,
    deleteCruds
}