const mongoose = require('mongoose');

const { Schema } = mongoose;

const toDoSchema = new Schema({
    userId: {type: Number },
    id: {type: Number},
    title: {type: String},
    completed: {type: Boolean}
}, {
timestamps: true,
collection: 'toDos',
});

toDoSchema.methods.toJSON = function(){
    const obj = this.toObject();

    delete obj.__v;

    return obj;
}

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;