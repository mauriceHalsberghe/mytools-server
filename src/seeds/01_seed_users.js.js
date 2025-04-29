import bcrypt from "bcrypt";

const tableName = "users";
 
const seed = async function (knex) {
  await knex(tableName).truncate();

  const password = "matrix123";
  const hashedPassword = await bcrypt.hash(password, 12);

  await knex(tableName).insert([
    {
      username: "admin",
      email: "admin@example.com",
      password: hashedPassword 
    },
    {
      username: "moorijst",
      email: "moorijst@example.com",
      password: hashedPassword 
    }
  ]);
};

export { seed };