const { createToDo, getToDo } = require('../../repositories');
const { errorHandler: ApplicationError } = require('../../helpers');
const axios = require('axios');

module.exports = {
  create: async (params) => {
    try {
      const toDoExists = await getToDo({ id: params.id });
      if (toDoExists) {
        throw new ApplicationError('To-Do já cadastrado', 409);
      }

      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`,
        {}
      );

      const newToDo = {
        userId: data.userId,
        id: data.id,
        title: data.title,
        completed: data.completed,
      };

      const toDo = await createToDo(newToDo);

      return toDo;
    } catch (error) {
      throw error;
    }
  },
};
