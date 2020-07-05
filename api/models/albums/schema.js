const mongoose = require('mongoose');

const { Schema } = mongoose;

const albumSchema = new Schema({
    userId: {type: Number },
    id: {type: Number},
    title: {type: String},
},{
    timestamps: true,
    collection: 'albums',
});

albumSchema.methods.toJSON = function() {
    const obj = this.toObject();

    delete obj.__v;

    return obj;
};

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;

