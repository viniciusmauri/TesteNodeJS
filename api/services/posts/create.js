const { createPost, getPost } = require('../../repositories');
const { errorHandler: ApplicationError } = require('../../helpers');
const axios = require('axios');

module.exports = {
  create: async (params) => {
    try {
      const postExists = await getPost({ id: params.id });
      if (postExists) {
        throw new ApplicationError('Post já cadastrado', 409);
      }

      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`,
        {}
      );

      const newPost = {
        userId: data.userId,
        id: data.id,
        title: data.title,
        body: data.body,
      };

      const post = await createPost(newPost);

      return post;
    } catch (error) {
      throw error;
    }
  },
};
