const mongoose = require('mongoose');
const app = require('./app');
const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
  app.listen(3000, () => {
    console.log("Server running. Use our API on port: 3000");
  });
  console.log("Database connection successfull");
  })
  .catch(e => {
  console.log(e.message);
  process.exit(1);
});
