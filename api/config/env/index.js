module.exports = {
  baseUrl: 'https://localhost:3000',
  corsOptions: {
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
  database: {
    name: 'testenodejs',
    host: 'localhost',
    port: '27017',
    user: '',
    password: '',
  },
};
