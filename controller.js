const Task = require("./models");

module.exports = {
    index: (req, res) => {
        Task.find()
            .then(results => res.json(results))
            .catch(err => res.json(err));
    },
    one: (req, res) => {
        const id = req.params.id;
        Task.findOne({_id:id})
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        const data = req.body;
        Task.create(data)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        const id = req.params.id;
        Task.findByIdAndUpdate(id, req.body, { "new": true })
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },
    destroy: (req,res) => {
        const id = req.params.id;
        Task.findByIdAndDelete(id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
}