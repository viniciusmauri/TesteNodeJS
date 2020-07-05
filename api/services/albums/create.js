const { errorHandler: ApplicationError} = require('../../helpers');
const axios = require('axios');
const { createAlbum, getAlbum } = require('../../repositories');

module.exports = {
  create: async (params) => {
    try {
        const albumExists = await getAlbum({id: params.id});
        if(albumExists){
            throw new ApplicationError('Album já cadastrado', 409);
        }

      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums`, {});

      const newAlbum = {
        userId: data.userId,
        id: data.id,
        title: data.title,
      };

      const album = await createAlbum(newAlbum);
      return album;
    } catch (error) {
      throw error;
    }
  },
};
