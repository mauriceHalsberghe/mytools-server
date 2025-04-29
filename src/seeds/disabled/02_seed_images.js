const tableName = "images";
 
const seed = async function (knex) {
  await knex(tableName).truncate();
  await knex(tableName).insert([
    {
      url: "https://picsum.photos/id/103/400/200",
      title: "lazy day",
      description: "i had a lazy day when i took this image",
      image_date: "2024-04-15",
      user_id: 1
    },
  ]);
};
 
export { seed };