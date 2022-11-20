

const create = (req,res) => {
    res.status(200).send("Project Create");
}

const index = (req,res) => {
    res.status(200).send("Project Index")
}

module.exports= {
    create,
    index
}
