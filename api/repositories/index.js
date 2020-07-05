const albums = require('./albums');
const posts = require('./posts');
const toDos = require('./toDos');

module.exports = {
    ...albums,
    ...posts,
    ...toDos,
}