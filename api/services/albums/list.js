const { albumsRepository }  = require('../../repositories');

module.exports = {
    list : async () => {
        try {
            const albums = await albumsRepository.list();

            if(!albums) {
                throw new ApplicationError('Album não encontrado', 404);
            }

            return albums;
        } catch (e) {
            throw e;
        }
    }
}