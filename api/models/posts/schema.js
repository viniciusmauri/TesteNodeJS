const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    userId: {
        type: Number
    },
    id: {
        type: Number
    },
    title: {
        type: String
    },
    body: {
        type: String
    },
}, {
    timestamps: true,
    collation: 'posts',
});

postSchema.methods.toJSON = function(){
    const obj = this.toObject();

    delete obj.__v;

    return obj;
}

const Post = mongoose.model('Post', postSchema);

module.exports = Post;