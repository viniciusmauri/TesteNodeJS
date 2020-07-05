db.createUser({
  user: 'admin',
  pwd: 'admin@2020',
  roles: [
    {
      role: 'readWrite',
      db: 'teste-nodejs',
    },
  ],
});
