module.exports = () => {

    const toDos = require(`${baseUrl}/todos`);
    const toDosController = {};

    toDosController.index = (req, res) => res.status(200).json(toDos);

    return toDosController;
}
