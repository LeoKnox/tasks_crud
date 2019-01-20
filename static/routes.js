const controller = require("./controller");

module.exports = function(app) {
    app.get('/tasks', controller.index);
    app.get('/tasks/:id', controller.one);
    app.post('/tasks/', controller.create);
    app.put('/tasks/:id', controller.update);
    app.delete('/tasks/:id', controller.destroy);
}

/* or
    app
        .get('/tasks', controller.index)
        .get('/tasks/:id', controller.one)
        .post('/tasks/', controller.create)
        .put('/tasks/:id', controller.update)
        .delete('/tasks/:id', controller.destroy)
        */