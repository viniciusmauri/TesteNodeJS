const { postsRepository }  = require('../../repositories');

module.exports = {
    list : async () => {
        try {
            const posts = await postsRepository.list();

            if(!posts) {
                throw new ApplicationError('Post não encontrado', 404);
            }

            return posts;
        } catch (e) {
            throw e;
        }
    }
}