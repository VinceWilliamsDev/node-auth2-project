const bcrypt = require('bcryptjs')

exports.seed = function (knex) {

  const users = [
    {
      username: "Bob", 
      password: bcrypt.hashSync("password", 8),
      department: "HR"
    },
    {
      name: "Lisa",
      password: bcrypt.hashSync("password", 8),
      department: "Sales"
    },
    {
      username: "Apple", 
      password: bcrypt.hashSync("password", 8),
      department: "HR"
    },
    {
      username: "Bob", 
      password: bcrypt.hashSync("password", 8),
      department: "HR"
    },
  ];

  return knex("users")
    .insert(users)
    .then(() => console.log("\n== Seed data for users table added. ==\n"));
};
