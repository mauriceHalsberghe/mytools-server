const tableName = "images";
 
export function up(knex) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments("id").primary();
        table.string("url").notNullable();
        table.string("title");
        table.string("description");
        table.date("image_date");
        table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE");
    });
}
 
export function down(knex) {
    return knex.schema.dropTable(tableName);
}