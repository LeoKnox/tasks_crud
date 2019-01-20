var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_api2', (err)=>{
    console.log("connect to db");
    if(err) {
        console.log(err);
    }
});

var TaskSchema = new mongoose.Schema({
    title: {type:String},
    description: {type:String},
    completed: {type:Boolean, default: false},
}, {timestamps: true})

module.exports = mongoose.model('Task', TaskSchema);