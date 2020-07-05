const { toDosRepository }  = require('../../repositories');

module.exports = {
    list : async () => {
        try {
            const toDos = await toDosRepository.list();

            if(!toDos) {
                throw new ApplicationError('To-Do não encontrado', 404);
            }

            return toDos;
        } catch (e) {
            throw e;
        }
    }
}