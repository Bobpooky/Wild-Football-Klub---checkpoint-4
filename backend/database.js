// const fs = require("fs");
const mysql = require("mysql2/promise");
// const path = require("path");
require("dotenv").config();

// const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const database = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

database
  .getConnection()
  .then(() => {
    console.warn("Database connected 👍🏻");
  })
  .catch((err) => console.error(err));

// pool.getConnection().catch(() => {
//   console.warn(
//     "Warning:",
//     "Failed to get a DB connection.",
//     "Did you create a .env file with valid credentials?",
//     "Routes using models won't work as intended"
//   );
// });

// const models = fs
//   .readdirSync(__dirname)
//   .filter((file) => file !== "AbstractManager.js" && file !== "index.js")
//   .reduce((acc, file) => {
//     // eslint-disable-next-line global-require, import/no-dynamic-require
//     const Manager = require(path.join(__dirname, file));

//     const managerInstance = new Manager();
//     managerInstance.setConnection(pool);

//     return { ...acc, [managerInstance.table]: managerInstance };
//   }, {});

// const handler = {
//   get(obj, prop) {
//     if (prop in obj) {
//       return obj[prop];
//     }

//     const pascalize = (string) =>
//       string.slice(0, 1).toUpperCase() + string.slice(1);

//     throw new ReferenceError(
//       `models.${prop} is not defined. Did you create ${pascalize(
//         prop
//       )}Manager.js?`
//     );
//   },
// };

module.exports = database;
